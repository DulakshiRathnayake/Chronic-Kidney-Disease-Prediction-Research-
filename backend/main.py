from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List
import joblib
import numpy as np
from config import config_array as _

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

class PredictionRequest(BaseModel):
    data: List[List[float]]



@app.post("/predict")
async def predict(request: PredictionRequest):
    try:
        
        # Load the model
        model = joblib.load("tpot_model.pkl")
        
        input_data = np.array(request.data[0] + _)


        # Reshape the input data to be a 2D array with one row
        input_data_2d = input_data.reshape(1, -1)

        # Make predictions
        predictions = model.predict(input_data_2d)

        predictions_list = predictions.tolist()
        print('Predictions', predictions_list)

        return {"predictions": predictions_list}
    except Exception as e:
        print('Excetion: ', str(e))
        return {"error": str(e)}

@app.get("/")
async def root():
    return FileResponse("static/index.html")


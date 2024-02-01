import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from '../src/Diabesafe-logo.bd1b9e7244937d1dd3ff.png'


const App = () => {
  const [age, setAge] = useState('');
  const [blood_Pressure, setBloodPressure] = useState('');
  const [specific_gravity, setSpecificgravity] = useState('');
  const [albumin, setAlbumin] = useState('');
  const [sugar, setSugar] = useState('');
  const [red_blood_cells, setRed_blood_cells] = useState(false);
  const [pus_cell, setPus_cell] = useState(false);
  const [pus_cell_clumps, setPus_cell_clumps] = useState(false);
  const [bacteria, setBacteria] = useState(false);
  const [blood_glucose_random, setBlood_glucose_random] = useState('');
  const [blood_urea, setBlood_urea] = useState('');
  const [serum_creatinine, setSerum_creatinine] = useState('');
  const [sodium, setSodium] = useState('');
  const [potassium, setPotassium] = useState('');
  const [haemoglobin, setHaemoglobin] = useState('');
  const [packed_cell_volume, setPacked_cell_volume] = useState('');
  const [white_blood_cell_count, setWhite_blood_cell_count] = useState('');
  const [red_blood_cell_count, setRed_blood_cell_count] = useState('');
  const [hypertension, setHypertension] = useState(false);
  const [diabetes_mellitus, setDiabetes_mellitus] = useState(false);
  const [coronary_artery_disease, setCoronary_artery_disease] = useState(false);
  const [appetite, setAppetite] = useState(false);
  const [peda_edema, setPeda_edema] = useState(false);
  const [aanemia, setAanemia] = useState(false);
  const [predictionResult, setPredictionResult] = useState('');

  const [isPredicting, setIsPredicting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPredicting(true);

    const requestData = {
      data: [
        [
          parseFloat(age),
          parseFloat(blood_Pressure),
          parseFloat(specific_gravity),
          parseFloat(albumin),
          parseFloat(sugar),
          parseFloat(red_blood_cells ? "1" : "0"),
          parseFloat(pus_cell ? "1" : "0"),
          parseFloat(pus_cell_clumps ? "1" : "0"),
          parseFloat(bacteria ? "1" : "0"),
          parseFloat(blood_glucose_random),
          parseFloat(blood_urea),
          parseFloat(serum_creatinine),
          parseFloat(sodium),
          parseFloat(potassium),
          parseFloat(haemoglobin),
          parseFloat(packed_cell_volume),
          parseFloat(white_blood_cell_count),
          parseFloat(red_blood_cell_count),
          parseFloat(hypertension ? "1" : "0"),
          parseFloat(diabetes_mellitus ? "1" : "0"),
          parseFloat(coronary_artery_disease ? "1" : "0"),
          parseFloat(appetite ? "1" : "0"),
          parseFloat(peda_edema ? "1" : "0"),
          parseFloat(aanemia ? "1" : "0"),
          parseFloat(haemoglobin)
        ],
      ],
    };
    console.log("Print DATA")
    console.log(requestData)

    // try {
    //   const response = await axios.post('/predict', requestData);
    //   const prediction = response.data.predictions[0];
    //   const predictionLabel = prediction === 0 && sodium > 130 && hypertension==0 ? 'CKD' : 'Not CKD';
    //   setPredictionResult(predictionLabel);
    // } catch (error) {
    //   console.error('Error predicting:', error);
    // }
    try {
      const response = await axios.post('/predict', requestData);
      const prediction = response.data.predictions[0];
      const predictionLabel = prediction === 0 && sodium > 130 && hypertension==0 ? 'CKD' : 'Not CKD';
      setPredictionResult(predictionLabel);
      setIsPredicting(false);
    } catch (error) {
      console.error('Error predicting:', error);
      setIsPredicting(false);
    }  
  };

  return (
    <div className='card'>
      <img src={logo} className='logo'></img>
      <h1>Chronic kidney desease Prediction</h1>
      <form onSubmit={handleSubmit} >
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
        required 
        />
        <label>Blood Pressure:</label>
        <input type="number" value={blood_Pressure} onChange={(e) => setBloodPressure(e.target.value)}
        required 
        />
        <label>Specific gravity:</label>
        <input type="number" value={specific_gravity} onChange={(e) => setSpecificgravity(e.target.value)}
        required 
        />
        <label>Albumin:</label>
        <input type="number" value={albumin} onChange={(e) => setAlbumin(e.target.value)}
        required 
        />
        <label>Sugar:</label>
        <input type="number" value={sugar} onChange={(e) => setSugar(e.target.value)}
        required 
        />
        
        <label>Blood glucose random:</label>
        <input type="number" value={blood_glucose_random} onChange={(e) => setBlood_glucose_random(e.target.value)}
        required
        />
        <label>Blood urea:</label>
        <input type="number" value={blood_urea} onChange={(e) => setBlood_urea(e.target.value)}
        required 
        />
        <label>Serum creatinine:</label>
        <input type="number" value={serum_creatinine} onChange={(e) => setSerum_creatinine(e.target.value)}
        required 
        />
        <label>Sodium:</label>
        <input type="number" value={sodium} onChange={(e) => setSodium(e.target.value)}
        required 
        />
        <label>Potassium:</label>
        <input type="number" value={potassium} onChange={(e) => setPotassium(e.target.value)}
        required 
        />
        <label>Haemoglobin:</label>
        <input type="number" value={haemoglobin} onChange={(e) => setHaemoglobin(e.target.value)}
        required
        />
        <label>Packed cell volume:</label>
        <input type="number" value={packed_cell_volume} onChange={(e) => setPacked_cell_volume(e.target.value)}
        required
        />
        <label>White blood cell count:</label>
        <input type="number" value={white_blood_cell_count} onChange={(e) => setWhite_blood_cell_count(e.target.value)}
        required 
        />
        <label>Red blood cell count:</label>
        <input type="number" value={red_blood_cell_count} onChange={(e) => setRed_blood_cell_count(e.target.value)}
        required 
        />
    
        <div className="checkbox-container">
          <label className="checkbox-label">Red blood cells</label>
          <div className="checkbox-options">
            <input
              type="checkbox"
              checked={red_blood_cells === 'Normal'}
              onChange={() => setRed_blood_cells('Normal')}
            />
            <span className="checkbox-label">Normal</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={red_blood_cells === 'Abnormal'}
              onChange={() => setRed_blood_cells('Abnormal')}
            />
            <span className="checkbox-label">Abnormal</span>
          </div>
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">Pus cell</label>
          <div>
            <input
              type="checkbox"
              checked={pus_cell === 'Normal'}
              onChange={() => setPus_cell('Normal')}
            />
            <span className="checkbox-label">Normal</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={pus_cell === 'Abnormal'}
              onChange={() => setPus_cell('Abnormal')}
            />
            <span className="checkbox-label">Abnormal</span>
          </div>
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">Pus cell clumps</label>
          <div>
            <input
              type="checkbox"
              checked={pus_cell_clumps === 'Notpresent'}
              onChange={() => setPus_cell_clumps('Notpresent')}
            />
            <span className="checkbox-label">Notpresent</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={pus_cell_clumps === 'present'}
              onChange={() => setPus_cell_clumps('present')}
            />
            <span className="checkbox-label">Present</span>
          </div>
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">Bacteria</label>
          <div>
            <input
              type="checkbox"
              checked={bacteria === 'Notpresent'}
              onChange={() => setBacteria('Notpresent')}
            />
            <span className="checkbox-label">Notpresent</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={bacteria === 'present'}
              onChange={() => setBacteria('present')}
            />
            <span className="checkbox-label">Present</span>
          </div>
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">Appetite</label>
          <div>
            <input
              type="checkbox"
              checked={appetite === 'good'}
              onChange={() => setAppetite('good')}
            />
            <span className="checkbox-label">Good</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={appetite === 'bad'}
              onChange={() => setAppetite('bad')}
            />
            <span className="checkbox-label">Bad</span>
          </div>
        </div>
        <div>
        <label className="checkbox-label">Hypertension</label>
          <input type="checkbox" checked={hypertension} onChange={(e) => {const newVal = e.target.checked;
          setHypertension(newVal);
          console.log('Hypertension', newVal)}} />
        </div>
        <div>
        <label className="checkbox-label">Diabetes mellitus</label>
          <input type="checkbox" checked={diabetes_mellitus} onChange={(e) => {const newVal = e.target.checked;
          setDiabetes_mellitus(newVal);
          console.log('Diabetes mellitus', newVal)}} />
        </div>
        <div>
        <label className="checkbox-label">Coronary Artery Disease</label>
          <input type="checkbox" checked={coronary_artery_disease} onChange={(e) => {const newVal = e.target.checked;
          setCoronary_artery_disease(newVal);
          console.log('Coronary Artery Disease', newVal)}} />
        </div>
        <div>
        <label className="checkbox-label">Peda edema</label>
          <input type="checkbox" checked={peda_edema} onChange={(e) => {const newVal = e.target.checked;
          setPeda_edema(newVal);
          console.log('Peda edema', newVal)}} />
        </div>
        <div>
        <label className="checkbox-label">Aanemia</label>
          <input type="checkbox" checked={aanemia} onChange={(e) => {const newVal = e.target.checked;
          setAanemia(newVal);
          console.log('Aanemia', newVal)}} />
        </div>


        {/* <button type="submit">Predict</button> */}
        <button type="submit" disabled={isPredicting}>
        {isPredicting ? 'Predicting...' : 'Predict'}
      </button>
      </form>
      {predictionResult && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{predictionResult}</p>
        </div>
      )}

    </div>
  );
};

export default App;

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    injury: String,
    painScale: Number,
    code: { type: String, default: () => Math.random().toString(36).substr(2, 9) },
    createdAt: { type: Date, default: Date.now },
    priorityScore: Number,
  });

  const Patient = mongoose.model('Patient', PatientSchema);

// GET: Retrieve all patients
app.get('/api/patients', async (req, res) => {
    try {
      let patients = await Patient.find();
      patients = patients.map(patient => ({
        ...patient.toObject(),
        priorityScore: calculatePriorityScore(patient)
      }));
      patients.sort((a, b) => b.priorityScore - a.priorityScore);
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));

function PatientInfoDashboard({ searchTerm }) {
    const [patients, setPatients] = useState([]);

    const fetchPatients = async () => {
        try {
          const response = await fetch('/api/patients');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPatients(data);
        } catch (error) {
          console.error('Error fetching patient data:', error);
        }
      };
    
      // Fetching patients on component mount and setting up interval to fetch patients every 10 seconds
      useEffect(() => {
        fetchPatients();
        const intervalId = setInterval(fetchPatients, 10000);
    
        // Cleaning up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

      return (
        <div className="patient-info-dashboard">
          <h2>Patient Information Dashboard</h2>
          <div className="patient-list">
            {filteredAndSortedPatients.map(patient => (
              <div key={patient._id} className="patient">
                <p><strong>Priority Score:</strong> {patient.priorityScore}</p>
                <p><strong>Name:</strong> {patient.name}</p>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Injury:</strong> {patient.injury}</p>
                <p><strong>Pain Scale:</strong> {patient.painScale}</p>
                <button onClick={() => removePatient(patient._id)}>Mark as Attended</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // Exporting the PatientInfoDashboard component
    export default PatientInfoDashboard;
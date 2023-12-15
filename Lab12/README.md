# Hospital Triage System API

## Overview

This lab implements an API for a Hospital Triage System, focusing on managing a patient waitlist. It's designed to work with a React application, providing endpoints to fetch and list patient data. This is just an outline of how the endpoint would be implimented, and not a functional version.

## API Endpoints

### `GET /api/patients`
- **Description:** Retrieves a list of all patients from the emergency waitlist database.
- **Usage:** This endpoint is called from the React frontend to fetch and display patient information on the dashboard. It returns a list of patients with details such as name, age, address, injury, pain scale, and priority score.

## React Application Integration

### PatientInfoDashboard Component
- The `PatientInfoDashboard` component in the React application utilizes the above API endpoint.
- It fetches patient data by making a request to `GET /api/patients`.
- The fetched data is then used to populate a list, displaying each patient's details. This list is part of the administrative dashboard, allowing hospital staff to view and manage the patient waitlist effectively.


## Usage Scenario

- **Hospital Administration:** The primary users of this application are hospital administrators who need to manage the patient waitlist.
- **Real-time Data Access:** The React frontend provides real-time access to patient data, updated dynamically through the API.
- **Patient Management:** Administrators can use the dashboard to view patient details and prioritize care based on the triage information.

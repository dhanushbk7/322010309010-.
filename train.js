import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const API_ENDPOINT_URL = 'YOUR_API_ENDPOINT_URL';

const TrainListPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get(API_ENDPOINT_URL);
        // Process and sort train data here based on specifications
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            Train: {train.name}, Price: {train.price}, Seats: {train.seats}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SingleTrainPage = () => {
  // Implement single train page logic here
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={TrainListPage} />
          <Route path="/train/:id" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

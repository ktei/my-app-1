import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Shell } from './App';

import { Container } from './framework/ui';
import { CourseListView } from './Course';

import './styles/app.css';

axios.defaults.baseURL = 'http://lms1210.azurewebsites.net';

const App = () => {
  return (
    <Shell>
      <Container>
        <CourseListView />
      </Container>
    </Shell>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

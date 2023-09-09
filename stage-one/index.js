const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    const date = new Date();
    const day = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[day];

    const githubUrl = 'https://github.com/Ndumatt1/HNGx-INTERN.git';
    const github_file_url = 'https://github.com/Ndumatt1/HNGx-INTERN/blob/main/stage-one/index.js';

    const statusCode = res.statusCode;

    const utc_time = date.toISOString().split('.')[0] + 'Z';//new Date(date.setMilliseconds(0)).toISOString();

    res.json({
        slack_name,
        current_day: today,
        utc_time,
        track,
        github_file_url,
        github_repo_url: githubUrl,
        status_code: statusCode
    });
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
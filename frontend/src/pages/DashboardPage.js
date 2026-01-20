import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import "./css/dashboard.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";


export default function DashboardPage() {
  const { user, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) {
    return <div>Loading dashboard...</div>;
  }
  /* kördiagramhoz */
  ChartJS.register(ArcElement, Tooltip, Legend);
  /* vonaldiagramhoz  */
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  /* vonaldiagramhoz  */
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Credit progress (Last 30 days)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Credits",
        },
      },
      x: {
        title: {
          display: false,
          text: "Date",
        },
      },
    },
  };

  /* kördiagramhoz  */
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Statisztikák",
      },
    },
  };

  /* kördiagramhoz  */
  const data = {
    labels: ["Completed chapters", "Enrolled Courses"],
    datasets: [
      {
        label: "# of Votes",
        data: [user.stats.completedChapters, user.stats.enrolledCourses],
        /* data: [12, 5] */
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  /* vonaldiagramhoz */
  //A label az utolós 30 nap legyen
  const labels = [];
  for (let index = 0; index < 30; index++) {
    const d = new Date();
    d.setDate(d.getDate() - (29 - index));
    labels.push(d.toISOString().split("T")[0]);
  }

  /* Előállítjuk a recentActivity listából naponta a crediteket */
  const creditsByDate = {};

  // végigmegyünk az aktivitásokon 

  if (user.recentActivity !== undefined) {
    user.recentActivity.forEach((item) => {
      const date = item.timestamp.split("T")[0]; // YYYY-MM-DD
      if (!creditsByDate[date]) {
        creditsByDate[date] = 0;
      }
      creditsByDate[date] += item.creditsEarned;
    });
  }

  // Az utolsó 30 nap dátumát kikeressük az asszociatív tömbből és megnézzük a hozzá tartozó értékeket
  const dataValues = labels.map((date) => creditsByDate[date] || 0);

  const data2 = {
    labels: ["Completed chapters", "Enrolled Courses"],
    datasets: [
      {
        label: "# of Votes",
        data: [user.stats.completedChapters, user.stats.enrolledCourses],
        /* data: [12, 5] */
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bracket">
      <div className="headerText">
        <div className="welcomeText">WELCOME BACK, {user.user.name ?? "GUEST"}</div>
        <div className="balanceText">
          CURRENT BALANCE: {user.user.creditBalance ?? user.credits ?? "NULL"} CREDITS
        </div>
      </div>

      <div className="infoBoxes">
        <div className="enrolledCoursesBracket">
          <div className="upperText">[METRIC]</div>
          <div className="courseNum">{user.stats?.enrolledCourses ?? "NULL"}</div>
          <div className="lowerText">ENROLLED COURSES</div>
        </div>

        <div className="completedChaptersBracket">
          <div className="upperText">[METRIC]</div>
          <div className="courseNum">{user.stats?.completedChapters ?? "NULL"}</div>
          <div className="lowerText">COMPLETED CHAPTERS</div>
        </div>

        <div className="totalCreditsBracket">
          <div className="upperText">[METRIC]</div>
          <div className="courseNum">{user.stats?.totalCreditsEarned ?? "NULL"}</div>
          <div className="lowerText">TOTAL CREDITS EARNED</div>
        </div>
      </div>

      <div className="diagrams">
        <div className="creditProgressBracket">
          <div className="bracketUpperRight">[CHART]</div>
          <div className="diagrNameCredit">CREDIT PROGRESS (LAST 30 DAYS)</div>
          <div className="chartBox">
            <Line
              options={options}
              data={{
                labels,
                datasets: [
                  { label: "Credits", data: dataValues, borderWidth: 2, pointRadius: 3 },
                ],
              }}
            />
          </div>
        </div>

        <div className="courseComplBracket">
          <div className="bracketUpperRight">[CHART]</div>
          <div className="diagrNameCredit">COURSE COMPLETION STATUS</div>
          <div className="chartBox">
            <Doughnut options={options2} data={data2} />
          </div>
        </div>
      </div>

      <div className="lowerBox">
        <div className="leftBracket">BROWSE COURSES</div>
        <div className="rightBracket">BOOK MENTOR SESSION</div>
      </div>
    </div>
  );

}


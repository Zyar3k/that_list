import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // PieChart,
  // Pie,
  // RadialBarChart,
  // RadialBar,
} from "recharts";

import "./Stats.scss";

const completionStatus = [
  {
    przeczytane: 75,
    nieprzeczytane: 271,
    amt: 1000,
  },
];
const data2 = [
  {
    przeczytane: 22,
    nieprzeczytane: 78,
    amt: 100,
  },
];

const data = [
  {
    name: "AMAZON",
    przeczytane: 13,
    nieprzeczytane: 87,
    amt: 2400,
  },
  {
    name: "BBC",
    przeczytane: 41,
    nieprzeczytane: 59,
    amt: 2210,
  },
  {
    name: "EMPIK",
    przeczytane: 23,
    nieprzeczytane: 77,
    amt: 2290,
  },
  {
    name: "GANDALF",
    przeczytane: 31,
    nieprzeczytane: 69,
    amt: 2000,
  },
  {
    name: "POZYCJE",
    przeczytane: 26,
    nieprzeczytane: 74,
    amt: 2181,
  },
];

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__row">
        <h3 className="stats__rowTitle">1List</h3>
        <p className="stats__rowSubTitle">Liczba książek: 346</p>

        <div className="stats__card">
          <p className="stats__card__title">Stan ukończenia (szt.)</p>
          <div className="stats__card__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={completionStatus}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={["0", (dataMax) => dataMax + 9]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="przeczytane" stackId="a" fill="#82ca9d" />
                <Bar dataKey="nieprzeczytane" stackId="b" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="stats__card">
          <p className="stats__card__title">Stan ukończenia (%)</p>
          <div className="stats__card__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="przeczytane" stackId="a" fill="#82ca9d" />
                <Bar dataKey="nieprzeczytane" stackId="b" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="stats__row">
        <h3 className="stats__rowTitle">Stan ukończenia</h3>
        <p className="stats__rowSubTitle">Liczba list: 5</p>

        <div className="stats__card stats__card--all">
          <p className="stats__card__title">Wyniki procentowe</p>
          <div className="stats__card__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="przeczytane" stackId="a" fill="#82ca9d" />
                <Bar dataKey="nieprzeczytane" stackId="b" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <div className="card__left">
          <h3>M2R (346)</h3>
          <p>Przeczytane 75 (22%)</p>
          <p>Dostępne 124 (36%)</p>
        </div>
        <div className="card__right">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div> */}

      {/* <div>
        <h2>M2R</h2>
      </div>
      <p>M2R (346) Przeczytane 75 (22%) Dostępne 124 (36%)</p>
      <p>Amazon Przeczytane 13(13%) </p>
      <p>BBC Przeczytane 41 (41%) </p>
      <p>Empik Przeczytane 23 (23%)</p>
      <p>Gandalf Przeczytane 31 (31%) </p>
      <p>Pozycje obowiązkowe Przeczytane 66 (26%)</p> */}
    </div>
  );
};

export default Stats;

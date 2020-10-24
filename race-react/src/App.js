import React from 'react';
import styles from './App.module.css';

//

const canadianDeathRace = {
    name: ["CANADIAN", "DEATH RACE"],
    date: "03 AUG 2013",
    distance: "125KM",
    time: "17:53:58"
};
const grandTwoGrand = {
    name: ["GRAND 2", "GRAND"],
    date: "21 SEPT 2014",
    distance: "268KM",
    time: "38:17:49"
};
const runForTheToad = {
    name: ["RUN FOR", "THE TOAD"],
    date: "29 SEPT 2012",
    distance: "50KM",
    time: "03:59:16"
};
const blackfoot = {
    name: ["BLACKFOOT", "ULTRA"],
    date: "30 MAY 2015",
    distance: "100KM",
    time: "09:23:48"
};

function stringToTerm(lst, spaceAroundFirstLine) {
    let terms = [];
    for (let i=0; i < lst.length; i++) {
        let temp = [];
        let term = lst[i];
        for (let j=0; j < term.length; j++) {
            temp.push(
                <div
                key={j}
                className={styles.Letter}>
                    {term[j]}
                </div>
            );
        }
        let centerClass = "";
        if (spaceAroundFirstLine && i === 0) {
            centerClass = styles.SpaceAround;
        }
        terms.push(
            <div
            key={i}
            className={`${styles.Term} ${centerClass}`}
            >{temp}</div>);
    }
    return terms;
}

function stringToSmallTerm(str) {
    let letters = str.split("").map((e, i) => {
        return (
            <div
                key={i}
                className={styles.Letter}>{e}</div>
        );
    });
    return <div className={styles.SmallTerm}>{letters}</div>;
}

class DateBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        let date = stringToTerm(this.props.date.split(" "), true);
        return (
            <div className={styles.DateBox}>
                {date}
            </div>
        );
    }
}

class TimeBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        let _time = this.props.time.split(":");
        let hrs = stringToSmallTerm(`${_time[0]}hrs`);
        let min = stringToSmallTerm(`${_time[1]}min`);
        let sec = stringToSmallTerm(`${_time[2]}sec`);
        return (
            <div className={styles.TimeBox}>
                {hrs}
                {min}
                {sec}
            </div>
        );
    }
}

class NameDistSpanTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        let name = stringToTerm(this.props.name);
        let dist = stringToTerm([this.props.distance], true);
        return (
            <div className={styles.NameDistSpanTwo}>
                {name[0]}
                {dist}
                {name[1]}
            </div>
        );
    }
}

class DateTimeSpanTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {

        let date = stringToSmallTerm(this.props.date);
        let raceType = stringToSmallTerm("STAGE RAGE");
        let time = stringToSmallTerm(this.props.time);

        return (
            <div className={styles.DateTimeSpanTwo}>
                {date}
                {raceType}
                {time}
            </div>
        );
    }
}

class NameTimeDistSpanThree extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {

        // For each term in the race title
        let title = stringToTerm(this.props.name);
        let time_dist = stringToSmallTerm(`${this.props.time} ${this.props.distance}`);

        return (
            <div className={styles.NameTimeDistSpanThree}>
                {title[0]}
                {time_dist}
                {title[1]}
            </div>
        );
    }
}

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.ContentColumn}>
            <NameTimeDistSpanThree
                name={canadianDeathRace.name}
                distance={canadianDeathRace.distance}
                time={canadianDeathRace.time}
            />
            <DateBox
                date={canadianDeathRace.date}
            />
            <NameDistSpanTwo
                name={grandTwoGrand.name}
                distance={grandTwoGrand.distance}
            />
            <DateBox
                date={runForTheToad.date}
            />
            <DateTimeSpanTwo
                date={grandTwoGrand.date}
                time={grandTwoGrand.time}
            />
            <NameDistSpanTwo
                name={runForTheToad.name}
                distance={runForTheToad.distance}
            />
            <DateBox
                date={blackfoot.date}
            />
            <TimeBox
                time={runForTheToad.time}
            />
            <NameDistSpanTwo
                name={blackfoot.name}
                distance={blackfoot.distance}
            />
            <div></div>
            <TimeBox
                time={blackfoot.time}
            />
        </div>
    </div>
  );
}

export default App;

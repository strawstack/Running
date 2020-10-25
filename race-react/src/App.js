import React from 'react';
import styles from './App.module.css';

//

const c1 = styles.C1;
const c2 = styles.C2;
const c3 = styles.C3;

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
const dragonBackRace = {
    name: ["DRAGON'S", "BACK RACE"],
    date: "22 JUN 2015",
    distance: "181KM",
    time: "64:12:34"
};
const aaut = {
    name: ["AL ANDALUS", "ULTIMATE", "TRAIL"],
    date: "06 JUL 2015",
    distance: "250KM",
    time: "20:32:12"
};
const blackfootUltra2 = {
    name: ["BLACKFOOT", "ULTRA"],
    date: "28 MAY 2016",
    distance: "100KM",
    time: "10:58:00"
};
const canadianDeathRace2 = {
    name: ["CANADIAN", "DEATH RACE"],
    date: "30 JUL 2016",
    distance: "125KM",
    time: "16:22:59"
};
const badBeaver = {
    name: ["BAD BEAVER", "ULTRA"],
    date: "01 AUG 2017",
    distance: "150KM",
    time: "19:43:00"
};
const midnightMoose = {
    name: ["MIDNIGHT", "MOOSE"],
    date: "25 SEPT 2018",
    distance: "100KM",
    time: "17:07:00"
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
        let c = this.props.colorClass;
        return (
            <div className={`${styles.DateBox} ${c}`}>
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
        let c = this.props.colorClass;
        return (
            <div className={`${styles.TimeBox} ${c}`}>
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
        let c = this.props.colorClass;
        return (
            <div className={`${styles.NameDistSpanTwo} ${c}`}>
                {name[0]}
                {dist}
                {name[1]}
            </div>
        );
    }
}

class NameSpanTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        let name = stringToTerm(this.props.name);
        let c = this.props.colorClass;
        return (
            <div className={`${styles.NameSpanTwo} ${c}`}>
                {name[0]}
                {name[1]}
                {name[2]}
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
        let raceType = stringToSmallTerm("STAGE RACE");
        if (this.props.singleStage) {
            raceType = stringToSmallTerm("SINGLE STAGE");
        }
        let time = stringToSmallTerm(this.props.time);
        let c = this.props.colorClass;
        return (
            <div className={`${styles.DateTimeSpanTwo} ${c}`}>
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
        let c = this.props.colorClass;
        return (
            <div className={`${styles.NameTimeDistSpanThree} ${c}`}>
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
                colorClass={c1}
            />
            <DateBox
                date={canadianDeathRace.date}
                colorClass={c1}
            />
            <NameDistSpanTwo
                name={grandTwoGrand.name}
                distance={grandTwoGrand.distance}
                colorClass={c2}
            />
            <DateBox
                date={runForTheToad.date}
                colorClass={c3}
            />
            <DateTimeSpanTwo
                date={grandTwoGrand.date}
                time={grandTwoGrand.time}
                colorClass={c2}
            />
            <NameDistSpanTwo
                name={runForTheToad.name}
                distance={runForTheToad.distance}
                colorClass={c3}
            />
            <DateBox
                date={blackfoot.date}
                colorClass={c1}
            />
            <TimeBox
                time={runForTheToad.time}
                colorClass={c3}
            />
            <NameDistSpanTwo
                name={blackfoot.name}
                distance={blackfoot.distance}
                colorClass={c1}
            />
            <DateBox
                date={dragonBackRace.date}
                colorClass={c2}
            />
            <TimeBox
                time={blackfoot.time}
                colorClass={c1}
            />
            <DateBox
                date={aaut.date}
                colorClass={c3}
            />
            <TimeBox
                time={dragonBackRace.time}
                colorClass={c2}
            />
            <NameSpanTwo
                name={aaut.name}
                colorClass={c3}
            />
            <NameDistSpanTwo
                name={dragonBackRace.name}
                distance={dragonBackRace.distance}
                colorClass={c2}
            />
            <TimeBox
                time={aaut.time}
                colorClass={c3}
            />
            <NameTimeDistSpanThree
                name={blackfootUltra2.name}
                distance={blackfootUltra2.distance}
                time={blackfootUltra2.time}
                colorClass={c1}
            />
            <TimeBox
                time={blackfootUltra2.time}
                colorClass={c1}
            />
            <NameDistSpanTwo
                name={canadianDeathRace2.name}
                distance={canadianDeathRace2.distance}
                colorClass={c2}
            />
            <DateBox
                date={badBeaver.date}
                colorClass={c3}
            />
            <DateTimeSpanTwo
                date={canadianDeathRace2.date}
                time={canadianDeathRace2.time}
                singleStage={true}
                colorClass={c2}
            />
            <NameDistSpanTwo
                name={badBeaver.name}
                distance={badBeaver.distance}
                colorClass={c3}
            />
            <DateBox
                date={midnightMoose.date}
                colorClass={c1}
            />
            <TimeBox
                time={badBeaver.time}
                colorClass={c3}
            />
            <NameDistSpanTwo
                name={midnightMoose.name}
                distance={midnightMoose.distance}
                colorClass={c1}
            />
            <div></div>
            <TimeBox
                time={midnightMoose.time}
                colorClass={c1}
            />
        </div>
    </div>
  );
}

export default App;

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

class DateBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        let date_split = this.props.date.split(" ");
        let date = [];
        for (let i=0; i < date_split.length; i++) {
            let term = date_split[i];
            let temp = [];
            for (let j=0; j < term.length; j++) {
                temp.push(
                    <div
                        key={j}
                        className={styles.Letter}>
                        {term[j]}
                    </div>
                );
            }
            let className = styles.Term;
            if (i == 0) {
                className = `${styles.Term} ${styles.SpaceAround}`;
            }

            date.push(
                <div
                    key={i}
                    className={className}>
                    {temp}
                </div>
            );
        }

        return (
            <div className={styles.DateBox}>
                {date}
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
        return (
            <div></div>
        );
    }
}

class DateTimeSpanTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
        return (
            <div></div>
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
        let title = [];
        for (let i=0; i < this.props.name.length; i++) {

            // For each letter
            let temp = [];
            let term = this.props.name[i];
            for (let j=0; j < term.length; j++) {
                temp.push(
                    <div
                    key={j}
                    className={styles.Letter}>
                        {term[j]}
                    </div>
                );
            }

            title.push(
                <div
                key={i}
                className={styles.Term}
                >{temp}</div>);
        }

        // Process date + distance
        let _time_dist = `${this.props.time}  ${this.props.distance}`;
        let letters = _time_dist.split("").map((e, i) => {
            return (
                <div
                    key={i}
                    className={styles.Letter}>{e}</div>
            );
        });
        let time_dist = <div className={styles.DateDistance}>{letters}</div>;

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
                dist={grandTwoGrand.distance}
            />
            <DateBox
                date={runForTheToad.date}
            />
            <DateTimeSpanTwo
                date={grandTwoGrand.date}
                time={grandTwoGrand.time}
            />
        </div>
    </div>
  );
}

export default App;

import { Component } from 'react';
import { FeedbackOption } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Section } from '../Section';
import { Notification } from '../Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  newFeedback = type =>
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const addFeedback = this.newFeedback;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOption options={options} onLeaveFeedback={addFeedback} />
        </Section>
        <Section title="Statistics">
          {!total() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total()}
              positivePercentage={positivePercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

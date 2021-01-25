import styled from 'styled-components';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              AAAAAAAAAA
            </h1>
            </Widget.Header>
            <Widget.Content>
            <p>
              aaaaaaaaaaa
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
        <Widget.Content>
            <h1>
              BBBBBBBBBBB
            </h1>
            <p>
              bbbbbbbbbbb
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/LucasGuerraCavalcante" />
      </QuizContainer>
    </QuizBackground>
  )
}

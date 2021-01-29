import styled from 'styled-components';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Input from '../src/components/Input';
import Button from '../src/components/Button';
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

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Quiz de bandeiras 
            </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }} >
              <span>
              🇧🇷 🇯🇵 🇪🇸 🇮🇹 🇷🇺 🇰🇷 🇨🇳 🇺🇸 🇬🇧 🇨🇱 🇿🇦
              </span>
              <Input 
                name="nomeDoUsuario"
                value={name}
                placeholder="Digite seu nome" 
                onChange={(event) => setName(event.target.value)}
              />
              <Button type="submit" disabled={name.length === 0} >
                  Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            
            <ul>
              {db.external.map((linkExterno) => {
                
                const {projectName, githubUser} = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.versel.app', '')
                  .split('.')

                return (
                    <li key={linkExterno}>
                      <Widget.Topic>
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/LucasGuerraCavalcante" />
      </QuizContainer>
    </QuizBackground>
  );
}

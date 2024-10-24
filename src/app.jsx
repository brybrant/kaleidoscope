import { render } from 'solid-js/web';

import GitHubSVG from '../node_modules/@brybrant/svg-icons/GitHub.svg?component-solid';

import './app.scss';
import './kaleidoscope.scss';

function App() {
  return (
    <>
      <div class='background__container'>
        <div class='background'>
          <For each={Array(12)}>{() =>
            <div class='a'>
              <div class='b'>
                <div class='wedges'/>
                <div class='pills'/>
                <div class='squares'/>
                <div class='petals'/>
              </div>
            </div>
          }</For>
        </div>
      </div>
      <main>
        <h1>
          <For each={'KALEIDOSCOPE'}>{(letter, i) =>
            <span class={`letter-${i()}`}>{letter}</span>
          }</For>
        </h1>
        <a
          class='button'
          href='https://github.com/brybrant/kaleidoscope'
          target='_blank'
        ><GitHubSVG/>View Source</a>
      </main>
    </>
  );
}

render(() => <App/>, document.getElementById('app'))

import React from 'react';
import Project, { Date, Heading, Paragraph } from '../components/project';

const Grid = ({children}) => <div>{children}</div>;
const Col = Grid;
const Row = Grid;

const Projects = () => (
  <Row>
    <Col sm={8} smOffset={1}>
      <Project>
        <Date>June 2017 - 1 year 5 months+</Date>
        <Heading>Tier 1 Investment Bank — Research Web Apps</Heading>
        <Paragraph>
          Based on-site, Fleet Street. Working within the Investment Research
          division on the bank's headline research presentation site and related
          apps.
        </Paragraph>
        <ul>
          <li>Data-heavy apps</li>
          <li>React / Redux / ag-Grid / AEM integration</li>
          <li>
            Via <a href="http://www.somoglobal.com">Somo</a>
          </li>
        </ul>
      </Project>

      <Project>
        <Date>August 2016 - 10 months</Date>
        <Heading>FX Trading Mobile App</Heading>
        <Paragraph>
          Lead developer on a mobile FX trading app for a prominent German bank.
        </Paragraph>
        <ul>
          <li>Angular 4</li>
          <li>Real time data</li>
          <li>Web Sockets</li>
          <li>Apache Cordova</li>
          <li>Redux</li>
          <li>rxjs</li>
          <li>
            Via <a href="http://www.fathomlondon.com">Fathom London</a>
          </li>
        </ul>
      </Project>

      <Project>
        <Date>April 2017 - 5 months</Date>
        <Heading>Regtech CRM Tool</Heading>
        <Paragraph>
          Senior developer on a custom CRM tool for a British multinational
          banking and financial services company.
        </Paragraph>
        <ul>
          <li>Angular.js 1.5</li>
          <li>Node</li>
          <li>Parse DB</li>
          <li>
            Via <a href="http://www.fathomlondon.com">Fathom London</a>
          </li>
        </ul>
      </Project>

      <Project>
        <Date>March 2014 - 1 year 9 months</Date>
        <Heading>Responsive.TV — Video platform SaaS</Heading>
        <Paragraph>
          Co-founded, led creative technology and developed the front-end of a
          unique video SaaS product with{' '}
          <a href="https://www.adweek.com/digital/bloombergs-new-publishing-platform-tinder-video-164340/">
            Bloomberg Media
          </a>{' '}
          as our first client.
        </Paragraph>
        <ul>
          <li>TypeScript (consumer front-end)</li>
          <li>Angular.js / d3 (custom CMS)</li>
          <li>Node</li>
          <li>
            Created with <a href="https://www.stinkstudios.com">StinkStudios</a>
          </li>
        </ul>
      </Project>

      <Project>
        <Date>Setpember 1999 - 14 years</Date>
        <Heading>Once upon a time...</Heading>

        <Paragraph>
          ...I previously worked in London and Dubai on award winning projects
          for brands including <a href="https://vimeo.com/80782045">Google</a>,
          Pepsi, <a href="https://vimeo.com/47368678">Philips</a>,{' '}
          <a href="https://vimeo.com/68389271">Shell</a>, Ford,{' '}
          <a href="https://vimeo.com/34629119">SNCF</a>, Land Rover,{' '}
          <a href="https://vimeo.com/29561057">Hugo Boss</a> and even those
          cheeky insurance peddling{' '}
          <a href="https://vimeo.com/79675988">meerkats.</a>
        </Paragraph>

        <Paragraph>
          In 2012, I turned my love for karaoke into a{' '}
          <a href="https://vimeo.com/162169077">social gaming business</a>.
        </Paragraph>

        <Paragraph>
          In 2007,{' '}
          <a href="https://techcrunch.com/2007/08/25/saturday-morning-im-watching-tubecast/">
            TechCrunch mistakenly reported
          </a>{' '}
          that{' '}
          <a href="https://www.youtube.com/watch?v=yLUrkPeLUYQ">tubecast.tv</a>{' '}
          — a personal ‘bedrooom-learning’ project of mine — was an actual
          start-up (?!).
        </Paragraph>

        <Paragraph>
          See <a href="https://www.linkedin.com/in/philipbulley/">LinkedIn</a>{' '}
          for detailed work and education history.
        </Paragraph>
      </Project>
    </Col>
  </Row>
);

export default Projects;

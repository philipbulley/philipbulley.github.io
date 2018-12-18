import React from 'react';
import styled from 'styled-components';
import ProjectComponent, {
  Date,
  Heading,
  Paragraph,
} from '../components/project';
import Grid from '../shared/grid/grid';
import query from '../shared/media';

const Projects = () => (
  <Grid>
    <Project>
      <Date>June 2017 - 1 year 6 months+</Date>
      <Heading>Tier 1 Investment Bank — Research Web Apps</Heading>
      <Paragraph>
        A lead role at a Tier 1 investment bank (based on-site, Fleet Street),
        working within the Investment Research division on their headline
        research site. Working closely with teams in Singapore and New York to
        create data-heavy apps using React, Redux and ag-Grid.
      </Paragraph>
      <Paragraph>
        The creation of a domain specific language and development of a custom
        expression to AST parser was a highlight. Additional responsibilities
        included driving front-end strategy as well as providing mentorship and
        guidance to fellow developers.
      </Paragraph>
      <ul>
        <li>Data-heavy apps</li>
        <li>React / Redux</li>
        <li>ag-Grid</li>
        <li>AEM integration</li>
        <li>
          Contract via <a href="http://www.somoglobal.com">Somo</a>
        </li>
      </ul>
    </Project>

    <Project>
      <Date>August 2016 - 10 months</Date>
      <Heading>Commerzbank — FX Trading Mobile App</Heading>
      <Paragraph>
        Lead developer on a mobile FX trading app for Commerzbank using
        TypeScript, RxJS, Angular 4 and Redux. Additional responsibilities
        include working directly with clients to specify technical solutions;
        providing mentorship and guidance to fellow developers as necessary;
        development of cross-project in-house tooling. Basis: Contract.
      </Paragraph>
      <ul>
        <li>Angular 4</li>
        <li>Real time data</li>
        <li>Web Sockets</li>
        <li>Apache Cordova</li>
        <li>Redux</li>
        <li>rxjs</li>
        <li>
          Contract via <a href="http://www.fathomlondon.com">Fathom London</a>
        </li>
      </ul>
    </Project>

    <Project>
      <Date>April 2017 - 5 months</Date>
      <Heading>Standard Chartered — Regtech CRM Tool</Heading>
      <Paragraph>
        Senior developer on a custom CRM tool for Standard Chartered.
      </Paragraph>
      <ul>
        <li>Angular.js 1.5</li>
        <li>Node</li>
        <li>Parse DB</li>
        <li>
          Contract via <a href="http://www.fathomlondon.com">Fathom London</a>
        </li>
      </ul>
    </Project>

    <Project>
      <Date>March 2014 - 1 year 9 months</Date>
      <Heading>Responsive.TV — Video platform SaaS</Heading>
      <Paragraph>
        Technical Lead and creative technologist on ResponsiveTV. An innovative
        video publishing SaaS comprising interactive video player (vanilla
        TypeScript) and publishing suite including an entirely custom Adobe
        Premiere-like video editor app (Angular.js and d3).
      </Paragraph>
      <Paragraph>
        A highlight was successfully pitchng to{' '}
        <a href="https://www.adweek.com/digital/bloombergs-new-publishing-platform-tinder-video-164340/">
          Bloomberg Media
        </a>{' '}
        and writing US patent documentation.
      </Paragraph>
      <ul>
        <li>TypeScript (consumer front-end)</li>
        <li>Angular.js / d3 (custom CMS)</li>
        <li>Node</li>
        <li>
          Contract via <a href="https://www.stinkstudios.com">StinkStudios</a>
        </li>
      </ul>
    </Project>

    <Project>
      <Date>Setpember 1999 - 14 years</Date>
      <Heading>Once upon a time...</Heading>

      <Paragraph>
        ...I previously worked in London and Dubai on award winning projects for
        brands including <a href="https://vimeo.com/80782045">Google</a>, Pepsi,{' '}
        <a href="https://vimeo.com/47368678">Philips</a>,{' '}
        <a href="https://vimeo.com/68389271">Shell</a>, Ford,{' '}
        <a href="https://vimeo.com/34629119">SNCF</a>, Land Rover,{' '}
        <a href="https://vimeo.com/29561057">Hugo Boss</a> and even those cheeky
        insurance peddling <a href="https://vimeo.com/79675988">meerkats.</a>
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
        <a href="https://www.youtube.com/watch?v=yLUrkPeLUYQ">tubecast.tv</a> —
        a personal ‘bedrooom-learning’ project of mine — was an actual start-up
        (?!).
      </Paragraph>

      <Paragraph>
        See <a href="https://www.linkedin.com/in/philipbulley/">LinkedIn</a> for
        detailed work and education history.
      </Paragraph>
    </Project>
  </Grid>
);

export default Projects;

const Project = styled(ProjectComponent)`
  grid-column: span 12;

  ${query.sm} {
    grid-column: span 9;
  }
`;

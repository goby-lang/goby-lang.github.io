/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectTitle projectTitleLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={imgUrl('goby-logo.svg')}/>
          <PromoSection>
            <Button href={docUrl('installation.html', language)}>Installation</Button>
            <Button href={docUrl('introduction.html', language)}>Documents</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center', paddingTop: '70px'}}>
    <GridBlock
      align="center"
      contents={[
        {
          content:
            `In Goby you can open a new thread by just using \`thread\` method, and passing objects between thread using \`Channel\` object (see [Thread and Channel](${siteConfig.baseUrl}docs/thread-and-channel.html) for more details)`,
          image: `${siteConfig.baseUrl}img/concurrency.svg`,
          imageAlign: "top",
          title: "Concurrency Support"
        },
        {
          content:
            `Goby has builtin multi-threaded web server called [\`SimpleServer\`](${siteConfig.baseUrl}docs/simple-server.html) with sinatra-like interfaces. We have our [sample site](https://sample.goby-lang.org) built upon it, go check it out!`,
          image: `${siteConfig.baseUrl}img/server.svg`,
          imageAlign: "top",
          title: "Builtin Multi-threaded Server"
        },
        {
          content:
            `[Plugin System](${siteConfig.baseUrl}docs/plugin-system.html) allows you to extend your Goby app with Go packages without writing any Go code`,
          image: `${siteConfig.baseUrl}img/plugin.svg`,
          imageAlign: "top",
          title: "Plugin System"
        }
      ]}
      layout="threeColumn"
    />

  </div>
);

const QuickSetup = props => (
  <Container 
    className="imageSmall"
    padding={["bottom", "top"]} 
    background="dark">
    <GridBlock
      contents={[
        {
          content:
            `
\`\`\`
$ brew tap goby-lang/goby
$ brew install goby
\`\`\`
          `,
          imageAlign: "right",
          image: `${siteConfig.baseUrl}img/code.svg`,
          title: "Quick Setup"
        }
      ]}
      layout="twoColumn"
    />
  </Container>
);
const TryIt = props => (
  <Container 
    className="imageMedium"
    padding={["bottom", "top"]} 
    background="light">
    <GridBlock
      contents={[
        {
          content:
            `
Just run
\`\`\`
$ goby -i
\`\`\`

          `,
          imageAlign: "left",
          image: imgUrl('igb.gif'),
          title: "Try it in Interactive Mode"
        }
      ]}
      layout="twoColumn"
    />
  </Container>

);
const JoinUs = props => (
  <Container 
    className="imageSmall"
    padding={["bottom", "top"]} 
    background="dark">
    <GridBlock
      contents={[
        {
          content:
            `
Join our community on [Slack](https://goby-lang-slackin.herokuapp.com/). Or follow us on [Twitter](https://twitter.com/goby_lang)
          `,
          imageAlign: "right",
          image: `${siteConfig.baseUrl}img/slack-and-twitter.png`,
          title: "Join Goby's community"
        }
      ]}
      layout="twoColumn"
    />
  </Container>
);



const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <QuickSetup />
          <TryIt />
          <JoinUs />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;

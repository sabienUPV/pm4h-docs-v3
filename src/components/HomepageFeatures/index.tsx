import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  imgSrc: string;
  imgAlt: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Download the application</Translate>,
    imgSrc: './img/imgDownload.png',
    imgAlt: 'Download the toolkit',
    description: (
      <Translate>
        With the toolkit you can become a real (digital) transformer to help clinicians in their daily practice
      </Translate>
    ),
  },
  {
    title: <Translate>Start doing things</Translate>,
    imgSrc: './img/imgNextSteps.png',
    imgAlt: 'Start doing things',
    description: (
      <Translate>
        Start your path with a simple example that let you know how easy is to use PMApp and how much benefits it provides
      </Translate>
    ),
  },
  {
    title: <Translate>Beyond the stars</Translate>,
    imgSrc: './img/imgTutorial.png',
    imgAlt: 'Beyond the stars',
    description: (
      <Translate>
        Extend your knowledge by consulting our tutorials plenty of details and ideas to guide you in the process
      </Translate>
    ),
  },
];

function Feature({title, imgSrc, imgAlt, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={imgAlt} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Default template from Docusaurus
// (this is probably a better version because it uses SVG images,
// but because we use PNG images, we need a different version)

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: JSX.Element;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

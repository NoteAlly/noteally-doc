import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
        Our platform ensures an user-friendly and easy-to-use experience, making note-sharing and sales effortlessly accessible for all users.
      </>
    ),
  },
  {
    title: 'Ranked Notes',
    Svg: require('@site/static/img/ranked_notes.svg').default,
    description: (
      <>
        Elevate your learning with our platform's Ranked Notes – a user-friendly experience that brings top-quality study materials to your fingertips effortlessly.
      </>
    ),
  },
  {
    title: 'Profit with your effort',
    Svg: require('@site/static/img/profit.svg').default,
    description: (
      <>
        Empower your academic journey and profit with your effort on our platform, where sharing and selling study materials is effortlessly rewarding.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/about.scss';

function AboutPage() {

  return (
    <Layout>
      <main className="page-content">
        <TitleBanner imageSource="/images/wooperbanner.svg" title="About" />

        <section className="page-section">
          <h1 className="title">What is the I-UPS?</h1>
          <p>Test</p>
        </section>

      </main>

    </Layout>
  );
}

export default AboutPage;
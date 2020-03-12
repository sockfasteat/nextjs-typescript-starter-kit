import React from 'react';
import App from 'next/app';
import '../css/tailwind.css';
import Nav from '../src/components/layout/Nav';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Nav/>
        <Component {...pageProps} />
      </>
    )
  }
}

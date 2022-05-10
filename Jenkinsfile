pipeline {
    agent any
stages {
  
   stage('Pull code') {
       steps {
           checkout scm
       }
    }
    stage('Download dependency Backend') {
       steps {
           dir('back-end') {
              sh 'npm i'
           }
       }
    }
    stage('Download dependency Frontend') {
       steps {
           dir('front-end') {
              sh 'npm i'
           }
       }
    }
    stage('Unit testing') {
       steps {
           ehco 'Unit testing'
       }
    }
    stage('Component testing') {
       steps {
           ehco 'Component testing'
       }
    }
  
  }
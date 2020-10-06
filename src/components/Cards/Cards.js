/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import CardItem from '../Carditem/CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src='images/sponWeekend.png'
                    text='Spontaneous Weekend is a collaborative application that provides random movies and restaurants for the user, taking away the stress of indecision. 
                    It utilizes MySQL, User Authentication, Express, API...etc'
                    label='Team Project'
                    href='https://github.com/cyrusjose/Spontaneous-Weekend-2.0'
                />
                <CardItem
                    src='images/fitnessTracker.png'
                    text='Fitness Tracker tracks daily workouts and workout details such as name, type, weight, sets, reps, distance, and duration.'
                    label='mongoDB'
                    href='https://github.com/katean004/fitness-tracker'
                />
                <CardItem
                    src='images/empTracker.png'
                    text='Employee Tracker is a Content Management System that helps employers to manage (add, view, and update) employee information.'
                    label='MySQL'
                    href='https://github.com/katean004/employee-tracker'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src='images/weatherDash.png'
                    text='Weather Dashboard displays weather information and the 5 Day Forecast based on searcged location.'
                    label='Weather API'
                    href='https://github.com/katean004/weather-dashboard'
                />
                <CardItem
                    src='images/Planner.png'
                    text='Workday Planner is a calendar application that allows the user to save events for each hour of the day.'
                    label='Local Storage & Moment'
                    href='https://github.com/katean004/work-day-planner'
                />
                <CardItem
                    src='images/budgetTracker.png'
                    text='Budget Tracker tracks user deposits and spendings. Offline functionality using Indexeddb and PWA.'
                    label='IndexedDB'
                    href='https://github.com/katean004/budget-tracker'
                />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards;

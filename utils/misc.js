/* eslint-disable */
/* eslint max-len: 0, no-param-reassign: 0 */

import * as _ from 'lodash';
import React from 'react';
import { log } from './LogUtil';
import moment from 'moment';

var baz = str => {
    return (
        (str.indexOf('0:00 AM to 11:59 PM') ||
            str.indexOf('0:00 AM - 11:59 PM')) > -1
    );
};

export function validateStr(str) {
    if (typeof str === 'string' && String(str) !== 'null') return str;
    else return '';
}

export function validateNum(num) {
    if (typeof num === 'number') return num;
    else return 0;
}

export function getTimeFromSeconds(seconds) {
    return moment.utc(seconds * 1000).format('h:mm A');
}

export function getHoursDiv(info, specialStyle, pStyle) {
    let hours;

    const normalPStyle = { margin: 0, padding: 0, fontSize: 14, color: '#666' };
    const normalStyle = { textAlign: 'left', marginLeft: 35 };

    pStyle = typeof pStyle === 'undefined' ? normalPStyle : pStyle;

    specialStyle =
        typeof specialStyle === 'undefined' ? normalStyle : specialStyle;

    log('misc - getHoursDiv - info: ', info);

    const getTimeFromSeconds = seconds => {
        return moment.utc(seconds * 1000).format('h:mm A');
    };

    const validateDisplay = (str, day) => {
        if (str.indexOf('Invalid') > -1) {
            // most likely closed on these days if there is an error in the time
            const newStr =
                day === 'Saturday' || day === 'Sunday'
                    ? day + ' Closed'
                    : 'Error in Time Entry - Please Report';

            return newStr;
        } else {
            if (
                str.indexOf('0:00 AM to 11:59 PM') > -1 ||
                str.indexOf('0:00 AM - 11:59 PM') > -1
            ) {
                return day + ' Open 24 Hours';
            } else return day + ' ' + str;
        }
    };

    // if a key is missing?
    const unknown = '? to ?';
    let hoursArr = [
        'Mon ' + unknown,
        'Tues ' + unknown,
        'Wed ' + unknown,
        'Thurs ' + unknown,
        'Fri ' + unknown,
        'Sat ' + unknown,
        'Sun ' + unknown
    ];
    // bad data may not have this...
    //if (info.open_monday) {
    _.forIn(info, (value, key) => {
        if (key === 'open_monday' || key === 'openmonday') {
            if (info.open_monday) {
                const displayMonOpenTime = getTimeFromSeconds(
                    info.open_monday_open
                );
                const displayMonClosedTime = getTimeFromSeconds(
                    info.open_monday_close
                );
                const displayMonTime =
                    displayMonOpenTime + ' to ' + displayMonClosedTime;

                hoursArr.splice(
                    0,
                    1,
                    validateDisplay(displayMonTime, 'Monday')
                );
            } else if (info.openmonday) {
                const displayMonOpenTime = getTimeFromSeconds(
                    info.openmondayopen
                );
                const displayMonClosedTime = getTimeFromSeconds(
                    info.openmondayclose
                );
                const displayMonTime =
                    displayMonOpenTime + ' to ' + displayMonClosedTime;

                hoursArr.splice(
                    0,
                    1,
                    validateDisplay(displayMonTime, 'Monday')
                );
            } else hoursArr.splice(0, 1, 'Closed Monday');
        } else if (key === 'open_tuesday' || key === 'opentuesday') {
            if (info.open_tuesday) {
                const displayTuesOpenTime = getTimeFromSeconds(
                    info.open_tuesday_open
                );
                const displayTuesClosedTime = getTimeFromSeconds(
                    info.open_tuesday_close
                );
                const displayTuesTime =
                    displayTuesOpenTime + ' to ' + displayTuesClosedTime;
                hoursArr.splice(
                    1,
                    1,
                    validateDisplay(displayTuesTime, 'Tuesday')
                );
            } else if (info.opentuesday) {
                const displayTuesOpenTime = getTimeFromSeconds(
                    info.opentuesdayopen
                );
                const displayTuesClosedTime = getTimeFromSeconds(
                    info.opentuesdayclose
                );
                const displayTuesTime =
                    displayTuesOpenTime + ' to ' + displayTuesClosedTime;
                hoursArr.splice(
                    1,
                    1,
                    validateDisplay(displayTuesTime, 'Tuesday')
                );
            } else hoursArr.splice(1, 1, 'Closed Tuesday');
        } else if (key === 'open_wednesday' || key === 'openwednesday') {
            if (info.open_wednesday) {
                const displayWedOpenTime = getTimeFromSeconds(
                    info.open_wednesday_open
                );
                const displayWedClosedTime = getTimeFromSeconds(
                    info.open_wednesday_close
                );
                const displayWedTime =
                    displayWedOpenTime + ' to ' + displayWedClosedTime;

                hoursArr.splice(
                    2,
                    1,
                    validateDisplay(displayWedTime, 'Wednesday')
                );
            } else if (info.openwednesday) {
                const displayWedOpenTime = getTimeFromSeconds(
                    info.openwednesdayopen
                );
                const displayWedClosedTime = getTimeFromSeconds(
                    info.openwednesdayclose
                );
                const displayWedTime =
                    displayWedOpenTime + ' to ' + displayWedClosedTime;

                hoursArr.splice(
                    2,
                    1,
                    validateDisplay(displayWedTime, 'Wednesday')
                );
            } else hoursArr.splice(2, 1, 'Closed Wednesday');
        } else if (key === 'open_thursday' || key === 'openthursday') {
            if (info.open_thursday) {
                const displayThurOpenTime = getTimeFromSeconds(
                    info.open_thursday_open
                );
                const displayThurClosedTime = getTimeFromSeconds(
                    info.open_thursday_close
                );
                const displayThurTime =
                    displayThurOpenTime + ' to ' + displayThurClosedTime;

                hoursArr.splice(
                    3,
                    1,
                    validateDisplay(displayThurTime, 'Thursday')
                );
            } else if (info.openthursday) {
                const displayThurOpenTime = getTimeFromSeconds(
                    info.openthursdayopen
                );
                const displayThurClosedTime = getTimeFromSeconds(
                    info.openthursdayclose
                );
                const displayThurTime =
                    displayThurOpenTime + ' to ' + displayThurClosedTime;

                hoursArr.splice(
                    3,
                    1,
                    validateDisplay(displayThurTime, 'Thursday')
                );
            } else hoursArr.splice(3, 1, 'Closed Thursday');
        } else if (key === 'open_friday' || key === 'openfriday') {
            if (info.open_friday) {
                const displayFriOpenTime = getTimeFromSeconds(
                    info.open_friday_open
                );
                const displayFriClosedTime = getTimeFromSeconds(
                    info.open_friday_close
                );
                const displayFriTime =
                    displayFriOpenTime + ' to ' + displayFriClosedTime;

                hoursArr.splice(
                    4,
                    1,
                    validateDisplay(displayFriTime, 'Friday')
                );
            } else if (info.openfriday) {
                const displayFriOpenTime = getTimeFromSeconds(
                    info.openfridayopen
                );
                const displayFriClosedTime = getTimeFromSeconds(
                    info.openfridayclose
                );
                const displayFriTime =
                    displayFriOpenTime + ' to ' + displayFriClosedTime;

                hoursArr.splice(
                    4,
                    1,
                    validateDisplay(displayFriTime, 'Friday')
                );
            } else hoursArr.splice(4, 1, 'Closed Friday');
        } else if (key === 'open_saturday' || key === 'opensaturday') {
            if (info.open_saturday) {
                const displaySatOpenTime = getTimeFromSeconds(
                    info.open_saturday_open
                );
                const displaySatClosedTime = getTimeFromSeconds(
                    info.open_saturday_close
                );
                const displaySatTime =
                    displaySatOpenTime + ' to ' + displaySatClosedTime;

                hoursArr.splice(
                    5,
                    1,
                    validateDisplay(displaySatTime, 'Saturday')
                );
            } else if (info.opensaturday) {
                const displaySatOpenTime = getTimeFromSeconds(
                    info.opensaturdayopen
                );
                const displaySatClosedTime = getTimeFromSeconds(
                    info.opensaturdayclose
                );
                const displaySatTime =
                    displaySatOpenTime + ' to ' + displaySatClosedTime;

                hoursArr.splice(
                    5,
                    1,
                    validateDisplay(displaySatTime, 'Saturday')
                );
            } else hoursArr.splice(5, 1, 'Closed Saturday');
        } else if (key === 'open_sunday' || key === 'opensunday') {
            if (info.open_sunday) {
                const displaySunOpenTime = getTimeFromSeconds(
                    info.open_sunday_open
                );
                const displaySunClosedTime = getTimeFromSeconds(
                    info.open_sunday_close
                );
                const displaySunTime =
                    displaySunOpenTime + ' to ' + displaySunClosedTime;

                hoursArr.splice(
                    6,
                    1,
                    validateDisplay(displaySunTime, 'Sunday')
                );
            } else if (info.opensunday) {
                const displaySunOpenTime = getTimeFromSeconds(
                    info.opensundayopen
                );
                const displaySunClosedTime = getTimeFromSeconds(
                    info.opensundayclose
                );
                const displaySunTime =
                    displaySunOpenTime + ' to ' + displaySunClosedTime;

                hoursArr.splice(
                    6,
                    1,
                    validateDisplay(displaySunTime, 'Sunday')
                );
            } else hoursArr.splice(6, 1, 'Closed Sunday');
        }

        /*
            "Jarvis Collegiate GSA - Gay/Lesbian/Bisexual/Transgender Support Groups"
            open_friday:true
            open_friday_close:61200 // time as seconds
            open_friday_open:32400
            open_monday:true
            open_monday_close:61200
            open_monday_open:32400
            open_saturday:false
            open_sunday:false
            open_thursday:true
            open_thursday_close:61200
            open_thursday_open:32400
            open_tuesday:true
            open_tuesday_close:61200
            open_tuesday_open:32400
            open_twentyfourseven:false
            open_wednesday:true
            open_wednesday_close:61200
            open_wednesday_open:32400
             */
    });
    //} else return null;

    log('getHoursDiv hoursArr: ', hoursArr);

    if (hoursArr.length === 0) {
        log('getHoursDiv possible bad times');
        return null;
    } else {
        const plist = _.map(hoursArr, (hour, uid) => (
            <p key={uid} style={pStyle}>
                {hour === 'null' ? 'No hours' : hour}
            </p>
        ));

        return <div style={specialStyle}>{plist}</div>;
    }
}

export function getHoursFromSavedSpot(savedSpot) {
    if (
        savedSpot.hours !== 'null' ||
        savedSpot.hours.toLowerCase() !== 'no hours'
    ) {
        const days = {};
        const dayKeys = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ];
        _.each(dayKeys, dayKey => {
            let closeHour,
                closeMinute,
                closeNight,
                label,
                openHour,
                openMinute,
                openMorning,
                open;

            if (savedSpot.hasOwnProperty(`open_${dayKey}_open`)) {
                const closeTime =
                    getTimeFromSeconds(savedSpot[`open_${dayKey}_close`]) !==
                    'Invalid date'
                        ? getTimeFromSeconds(savedSpot[`open_${dayKey}_close`])
                        : '5:00 PM';
                const closeAMorPM =
                    closeTime.toLowerCase().indexOf('pm') > -1 ? 'PM' : 'AM';
                closeHour = closeTime.split(':')[0];
                closeMinute = closeTime.split(':')[1].split(' ')[0];
                closeNight = closeAMorPM;
                label = capitalizeFirstLetter(dayKey.substr(0, 3));
                const openTime =
                    getTimeFromSeconds(savedSpot[`open_${dayKey}_open`]) !==
                    'Invalid date'
                        ? getTimeFromSeconds(savedSpot[`open_${dayKey}_open`])
                        : '9:00 AM';
                const openAMorPM =
                    openTime.toLowerCase().indexOf('pm') > -1 ? 'PM' : 'AM';
                openHour = openTime.split(':')[0];
                openMinute = openTime.split(':')[1].split(' ')[0];
                openMorning = openAMorPM;
                open = savedSpot[`open_${dayKey}`];
            } else {
                closeHour = '5';
                closeMinute = '00';
                closeNight = 'PM';
                label = capitalizeFirstLetter(dayKey.substr(0, 3));
                openHour = '9';
                openMinute = '00';
                openMorning = 'AM';
                open = false;
            }

            const day = {
                closeHour,
                closeMinute,
                closeNight,
                label,
                openHour,
                openMinute,
                openMorning,
                open
            };

            days[dayKey] = day;
        });

        const hours = {
            checkBox: {
                alwaysOpen: {
                    label: '24/7',
                    val: false
                }
            },
            days
        };

        return hours;
    }
}

export function transformLower(obj) {
    const lowercaseData = _.transform(obj, (result, val, key) => {
        result[key.toLowerCase()] = val;
    });
    return lowercaseData;
}

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer ? reducer(state, action.payload) : state;
    };
}

export function parseJSON(response) {
    return response.data;
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function getPurple() {
    return '#4D3F99';
}

export function getTeal() {
    return '#5bc5b6';
}

export function getMauve() {
    return 'rgb(159, 155, 204)';
}

export function getPurpleLite() {
    return '#9f9bcc';
}

export function getMoodyPurple() {
    return '#be9ac8';
}

export function getPlusPurple() {
    return '#9F9BCD';
}

export function getAdminRed() {
    return ''; // Maformed CSS error when I put a hex or a string ?!
}

export function getPrimaryTheme() {
    return '#4D3F99'; //"#30ad96";//"rgb(0, 188, 212)";
}

export function getOtherPurple() {
    return '#792592';
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getDisplayTimeAsString(date) {
    const now = typeof date === 'undefined' ? new Date() : date;

    const mins =
        now.getMinutes() < 10
            ? String('0' + now.getMinutes())
            : now.getMinutes();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const AMorPM = now.getHours() > 12 ? ' PM' : ' AM';

    const generalDisplayTime = hours + ':' + mins + AMorPM;
    ////console.log("getDisplayTime: ", generalDisplayTime)
    return generalDisplayTime;
}

export function getDisplayTime(date) {
    const now = typeof date === 'undefined' ? new Date() : date;

    const mins =
        now.getMinutes() < 10
            ? String('0' + now.getMinutes())
            : now.getMinutes();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const AMorPM = now.getHours() > 12 ? ' PM' : ' AM';

    const month = now.getMonth();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    const displayMonth = months[month];

    const generalDisplayTime =
        displayMonth +
        ' ' +
        now.getDate() +
        ', ' +
        now.getFullYear() +
        ' ' +
        hours +
        ':' +
        mins +
        AMorPM;
    ////console.log("getDisplayTime: ", generalDisplayTime);

    const readDisplayTime =
        generalDisplayTime.indexOf('undefined') > -1 ? '' : generalDisplayTime;

    return readDisplayTime;
}

export function getDaysAsSingleLetters() {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
}

export function getDayOfWeek(date) {
    const now = typeof date === 'undefined' ? new Date() : date;
    const dayOfWeekIndex = now.getDay();
    const days = getDaysAsSingleLetters();
    return days[dayOfWeekIndex];
}

export function convertTimeToZuluHour(day, isStartTime) {
    if (isStartTime) {
        const hour =
            day.openMorning === 'PM'
                ? Number(day.openHour) + 12
                : Number(day.openHour);
        const min = day.openMinute === '0' ? '00' : day.openMinute;
        const together = String(hour) + String(min);
        const zulu = Number(together);
        return zulu;
    } else {
        const hour =
            day.closeNight === 'PM'
                ? Number(day.closeHour) + 12
                : Number(day.closeHour);
        const min = day.closeMinute === '0' ? '00' : day.closeMinute;
        const together = String(hour) + String(min);
        const zulu = Number(together);
        return zulu;
    }
}

export function convertTimeToNumber(day, isStartTime) {
    const date = new Date();

    if (isStartTime) {
        const hour =
            day.openMorning === 'PM'
                ? Number(day.openHour) + 12
                : Number(day.openHour);
        const min = day.openMinute === '0' ? '00' : day.openMinute;

        date.setHours(hour);
        date.setMinutes(min);
    } else {
        const hour =
            day.closeNight === 'PM'
                ? Number(day.closeHour) + 12
                : Number(day.closeHour);
        const min = day.closeMinute === '0' ? '00' : day.closeMinute;

        date.setHours(hour);
        date.setMinutes(min);
    }
    // database store the date as seconds
    return moment(date).diff(moment().startOf('day'), 'seconds');
}

const decShift = 100000000;

export function convertShiftLatLongToTwoDecimal(lat, long) {
    // make sure the number has 7 decimal 10000000
    const convert = coord => {
        return coord.toFixed(8);
    };

    const twoDecLatNum = convert(lat) * decShift;
    const twoDecLongNum = convert(lat) * decShift;

    return { lat: twoDecLatNum, long: twoDecLongNum };
}

export function convertShiftBackDecimalToLatLong(lat, long) {
    const lat8Dec = lat / decShift;
    const long8Dec = long / decShift;

    return { lat: lat8Dec, long: long8Dec };
}

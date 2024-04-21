/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

/*
fecth data server
* @param {string} URL api url
* @param {function} callaback 
*
*/

/* `https://api.openweathermap.org/data/2.5/weather?q=Bilbao&lang=es&units=metric&appid=3b603bd32098614a8e2fc09325bbe026` */
const api_key = "3b603bd32098614a8e2fc09325bbe026";

export const fetchData = function (URL , callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res=>res.json())
    .then(data => callback(data))
} 

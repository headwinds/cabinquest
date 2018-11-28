/* eslint-disable */

import React from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";
//import * as d3 from "d3";

export default class LoadingAnimation extends React.Component {

    constructor(props){
        super(props);

        this.draw = this.draw.bind(this);
        this.animate = this.animate.bind(this);

    }

    componentDidMount(){
        console.log("LoadingAnimation componentDidMount");

        this.draw();
    }

    draw(){

        const self = this;
        const url = '../../static/img/bellwoods/animals/chicken/chick/chick.svg';

        //import * as Snap from "snapsvg";
        const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

        Snap.load(url, function ( loadedFragment ) {

            const snap = window.Snap("#svg");

            console.log("LoadingAnimation draw snap: ",snap);

            const group = snap.group();

            group.append( loadedFragment );
            //group.set({ opacity: 0 });
            //group.animate({ transform: 't-100,0,s3',  opacity: 1  }, 0 );
            //group.select("#spotFill").attr({'fill':getPurpleLite()});
            //group.select("#spotFill").attr({'fill': '#E24B70'});
            group.animate({ transform: 's0.7', opacity: 0  }, 0 );

            setTimeout( () => {
                group.animate({ transform: 't0,15,s3', opacity: 1  }, 3000, mina.elastic );

            }, 0);

            setTimeout( () => {
                //group.select("#spotFill").attr({'fill': '#E24B70'});
                group.animate({ transform: 't-10,7,s0.3' }, 3000,  mina.bounce  );
            }, 1000);


        });



    }

    animate(){
        console.log("LoadingAnimation animate");
        //TweenMax(this.ship, 5, {top:"100px", ease: Power2.easeInOut} )
        //TweenMax.to(this.ship,2,{top:this.state.top, ease: Power2.easeOut});
    }


    render(){
        return(
            <div className="svgContainer">
                <svg id="svg"></svg>
            </div>
            )
    }

}

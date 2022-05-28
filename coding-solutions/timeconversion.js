function timeConversion ( s )
{
    let AMPM = s.slice( -2 );
    let time = s.slice( 0, -2 );
    // if our time is from 12:00 AM to 12:59 AM
    if ( AMPM === "AM" )  {
        // if our time is 12:00 AM
        if ( s.substing( 0, 2 ) === "12" ) {
            // return 00:00
            time = "00";

        } else  {
            // return the time
            time = s.substring( 0, 2 );
        }
    // if our time is from 12:00 PM to 12:59 PM
    } else
    { 
        // if our time is 12:00 PM
        if( s.substring( 0, 2 ) === "12" ) {
            time = s.substring( 0, 2 );
        } else { 
            // add 12 to the time using parseInt base 10
            time = ( parseInt( s.substring( 0, 2 ) ) + 12 ).toString();
        }
    }
    // return the time removing the AM/PM
    return time + s.substring( 2, 8 );
}
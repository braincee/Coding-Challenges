function staircase (n) {
    for ( let i = 0; i < n; i++ )
    {
        let space = ' '.repeat( n - i - 1 );
        let hash = '#'.repeat( i + 1 );
        console.log( space + hash );

    }
}
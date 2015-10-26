var Calculator = React.createClass( {
    getInitialState: function() {

    },
    render: function() {
        return (
            <div className="calculator">
                this is simple calculator.
                <CalcForm />
            </div>
        );
    }
});

var CalcForm = React.createClass( {
    render: function() {
        var rawMarkup = converter.makeHtml( this.props.children.toString() );
        return (
          <div className="comment">
              {this.props.author}
          </div>
        );
    }
});
React.render(
    <Calculator />,
    document.getElementById( 'content' )
);


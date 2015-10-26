var ParentCompornent = React.createClass({
    getInitialState: function () {
        return {
            num: 0
        };
    },

    incrementNum: function() {
        var num = this.state.num;
        this.setState( {num: num + 1} );
    },

    render: function () {
        return (
            <div clickEvent='incrementNum'>
                parent compornent : {this.state.num}
                <ChildButton clickEvent={this.incrementNum} />
          </div>
        );
    }
});

var ChildButton = React.createClass({
      
    _clickEvent: function(){
        this.props.clickEvent();
    },

    render: function() {
        return (
          <input type='button' value='add' onClick={_clickEvent}>
              
            </input>
        );
    }
});

React.render(
    <ParentCompornent />,
    document.getElementById('content')
);


export const getHeader = () => {
    if (this.props.home.header !== null) {
        const headers = this.props.home.header[0].headers;
        const items = [];

        _.forIn(headers, (val, key) => {
            items.push(
                <p key={key} style={{ padding: 0, margin: 0 }}>
                    {key} : {val}
                </p>
            );
        });

        return items;
    } else return null;
};

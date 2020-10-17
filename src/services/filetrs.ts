const capitalizeFirstLetter = (value: string): string => {
    const firstLetter = value.charAt(0);
    if( firstLetter === firstLetter.toUpperCase() ) {
        return value;
    }
    return firstLetter.toUpperCase() + value.slice(1);
};

export const highlight = (value: string, query: string): string => {
    return value.replace(new RegExp(query, "ig"), '<span style=\'background: red\'>' + capitalizeFirstLetter(query) + '</span>')
}

export const highlightRow = (row: any, query: string): string => {
    let ret = ''
    Object.keys(row).forEach((column) => {
        if (typeof row[column] === 'string') {
            ret = ret + row[column].replace(new RegExp(query, "ig"), '<span style=\'background: red\'>' + capitalizeFirstLetter(query) + '</span>')
        }
    })
    return ret
}
export interface IOptions{
    values: Object[],
    name:string,
    type:string,
    return?:string[]
}
const GTemplage =  (obj:IOptions)=> {
    const params = obj.values.map((v) => {
      const name = Object.keys(v)[0];
      const type = v[name];
      return `$${name}:${type}`;
    }).join(',');

    const paramsIn = obj.values.map((v) => {
      const name = Object.keys(v)[0];
      return `${name}:$${name}`;
    }).join(',');
    return `
    ${obj.type} ${obj.name} (${params}){
        ${obj.name}(${paramsIn})${renderReturn(obj.return)}
    }
`;
}

function renderReturn(array:string[]){
    if(array && array.length>0){
        console.log('exsits ')
        return `{
            ${array.join('\n')}
            }
        `
    }
    console.log('not exsits')
    return ''
}
export default GTemplage;

let user = {};

export default () =>{
    return user;
}

const addAttribute = (attribute, value) =>{
    user[attribute] = value;
}

export const editName = (name) => addAttribute("name", name)
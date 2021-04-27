export const codeGenerator = () => {
    let result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < 4; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
  
    return result.join('');
}
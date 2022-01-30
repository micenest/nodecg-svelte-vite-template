export class Mice {
  async checkReplicant(repName:string | array , placeholder:string | boolean | number | array) {
    return await new Promise ((resolve, reject) => {
      if (Array.isArray(repName)) {
        let arr = []
        for (let i = 0; i < repName.length; i++) {
          nodecg.readReplicant(repName[i], value => {
            if (value) {
              arr[i] = value;
            }
            else {
              if (Array.isArray(placeholder) && repName.length == placeholder.length) {
                arr[i] = placeholder[i];
              }
              else {
                reject(`Not enough arguments for placeholder [needs ${repName.length}].`);
              }
            }
          });
        }
        resolve(arr);
      }
      else {
        nodecg.readReplicant(repName, value => {
          if (value) {
            resolve(value);
          }
          else {
            resolve(placeholder);
          }
        });
      }
   });
  }
  changeReplicant(val : string | boolean | number, repVal : string) {
    let replicant = nodecg.Replicant(repVal);
    replicant.value = val;
  }
}

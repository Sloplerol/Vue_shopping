let myPlugin = {};

myPlugin.install = function(Vue,options){
    Vue.directive(options.name,(element,params)=>{
        console.log(params);
        element.innerHTML = params.value
    })

}


export default myPlugin;
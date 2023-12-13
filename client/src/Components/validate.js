const validate = (form) => {
    const errors = {};
    
    if(!form.breed){
        errors.breed = 'Complete name'
    }else if(!/^[a-zA-Z0-9-() .]+$/.test(form.breed)){
        errors.breed = 'Only letters, numbers, - and ()'
    }else if(form.breed.length<=3){
        errors.breed = 'Must have more than 3 characters'
    }
    if(!form.weight){
        errors.weight = 'Complete Wheight'
    }else if(!/^[0-9]+$/.test(form.weight)){
        errors.weight = 'only numbers are allowed in this field'
    }
    if(!form.height){
        errors.height = 'Complete height'
    }else if(!/^[0-9]+$/.test(form.height)){
        errors.height = 'only numbers are allowed in this field'
    }
    if(!form.life_span){
        errors.life_span = 'Complete life span'
    }else if(!/^[0-9]+$/.test(form.life_span)){
        errors.life_span = 'only numbers are allowed in this field'
    }
    if(!form.image){
        errors.image = 'Complete life image'
    }else if(!/^[0-9]+$/.test(form.image)){
        errors.image = 'only numbers are allowed in this field'
    }
    if (form.temperament.length  <1) {
        errors.temperament = 'Complete Temperament';
      } 
    
    return errors;
};

export default validate;
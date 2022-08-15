import { createStore } from 'vuex'
import { toRaw } from 'vue';

const def = () =>{
    return{
        products: null,
        singleProduct: null,
        currentUser: null,
        allUsers: null,
        loginError: null,
        registerComplete:null,
        registerError: null,
        user: null,
        cart: null,
        cartTotal: null
    }
}

export default createStore({
    state : def(),
    getters: {
        
    },
    mutations: {
        reset(state){
            Object.assign(state,def());
        },
        setProducts (state, products){
            state.products = products;
        },
        setSingleProduct (state, singleProduct){
            state.singleProduct = singleProduct;
        },
        setUser (state, user){
            state.user = user;
        },
        setCurrentUser (state, info){
            state.currentUser = info;
        },
        setLoginError(state,error){
            state.loginError = error;
        },
        setRegisterError(state,error){
            state.registerError = error;
        },
        setRegisterComplete(state){
            state.registerComplete = "Successfully Registered";
        },
        setAllUsers(state,users){
            state.allUsers = users;
        },
        clearSingleProduct(state){
            state.singleProduct = null
        },
        setCart(state,cart){
            state.cart= cart;
        },
        setCartTotal(state,total){
            state.cartTotal = total;
        }
    },
    actions: {
        async getProducts(context){
            fetch('https://fullstackapi-2.herokuapp.com/products')
            .then((res)=> res.json())
            .then((data)=> context.commit('setProducts',data.results))
        },
        async getSingleProduct(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/products/' + payload)
            .then((res)=> res.json())
            .then((data)=> context.commit('setSingleProduct',data.results[0]))
        },
        async registerUser(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.results){
                    context.commit('setRegisterComplete')
                    context.dispatch('loginUser',payload)
                }else{
                    context.commit('setRegisterError',data.result);
                }
            })
        },
        loginUser(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users', {
                method:'PATCH',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.token){
                    context.commit('setUser',data.token);
                    context.dispatch('getUserInfo');
                }else{
                    context.commit('setLoginError', data.results)
                }
            });
        },
        getUserInfo(context){
            fetch('https://fullstackapi-2.herokuapp.com/verify', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-auth-token': context.state.user
                }
            })
            .then((res)=> res.json())
            .then((data)=> {
                context.commit('setCurrentUser',data.token.user)
                context.dispatch('getCart')
            })
        },
        updateUser(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users/'+payload.id, {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers:{
                    'Content-type' : 'application/json; charset=UTF-8'
                }
            })
            .then((res)=> res.json())
            .then((data)=> console.log(data));
        },
        getAllUsers(context){
            fetch('https://fullstackapi-2.herokuapp.com/users')
            .then((res)=> res.json())
            .then((data)=> context.commit('setAllUsers',data.results));
        },
        async editProduct(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/products/'+payload.id, {
                method:'PUT',
                body: JSON.stringify(payload),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res)=> res.json())
            .then((data)=> context.dispatch('getProducts'));
        },
        async deleteProduct(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/products/'+payload, {
                method:'DELETE'
            })
            .then((res)=> res.json())
            .then((data)=> context.dispatch('getProducts'))
        },
        async addProduct(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/products',{
                method:'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res)=> res.json())
            .then((data)=> context.dispatch('getProducts'))
        },
        AddProductToCart(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/verify', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-auth-token': context.state.user
                }
            })
            .then((res)=> res.json())
            .then((data)=>
                fetch('https://fullstackapi-2.herokuapp.com/users/'+data.token.user.id+'/cart', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                .then((res)=> res.json())
                .then((data) => context.dispatch('getCart'))
            )
        },
        getCart(context){
            fetch('https://fullstackapi-2.herokuapp.com/users/'+context.state.currentUser.id+'/cart')
            .then((res)=>res.json())
            .then((data)=> {
                if(data.cart){
                    context.commit('setCart',data.cart);
                }else{
                    context.commit('setCart',[]);
                }
                context.dispatch('getCartTotal');
            })
        },
        removeFromCart(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users/'+context.state.currentUser.id+'/cart/'+payload, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res)=>res.json())
            .then(()=> context.dispatch('getCart'))
        },
        getCartTotal(context){
            let cart = toRaw(context.state.cart);
            if(typeof(cart) != 'object') return;
            let total = 0;
            cart.forEach(e => {
                total += e.price;
            });
            context.commit('setCartTotal',total);
        },
        clearSingleProduct(context){
            context.commit('clearSingleProduct')
        },
        deleteAccount(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users/'+payload, {
                method: 'DELETE',
                body:JSON.stringify({
                  id: payload  
                }),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then((res)=>res.json())
            .then((data)=> context.commit('reset'))
        },
        deleteAccountWithoutLogout(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users/'+payload, {
                method: 'DELETE',
                body:JSON.stringify({
                  id: payload  
                }),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then((res)=>res.json())
            .then((data)=> context.dispatch('getAllUsers'));
        }
    },

    modules: {

    }
})
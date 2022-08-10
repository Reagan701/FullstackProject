import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        singleProduct: null,
        allUsers: null,
        user:null,
        cart: null
    },
    getters: {
        
    },
    mutations: {
        setProducts (state, products){
            state.products = products;
        },
        setSingleProduct (state, singleProduct){
            state.singleProduct = singleProduct;
        },
        setUser (state, user){
            state.user = user;
        },
        setAllUsers(state,users){
            state.allUsers = users;
        },
        clearSingleProduct(state){
            state.singleProduct = null
        },
        setCart(state,cart){
            state.cart= cart;
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
            .then((data) => console.log(data.results))
        },
        async loginUser(context,payload){
            fetch('https://fullstackapi-2.herokuapp.com/users', {
                method:'PATCH',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res) => res.json())
            .then((data) => {context.commit('setUser',data.token); context.dispatch('getCart')});
        },
        async getUserInfo(context){
            fetch('https://fullstackapi-2.herokuapp.com/verify', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-auth-token': context.state.user
                }
            })
            .then((res)=> res.json())
            .then((data)=> console.log(data.token.user))
        },
        async getAllUsers(context){
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
            fetch('https://fullstackapi-2.herokuapp.com/verify', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-auth-token': context.state.user
                }
            })
            .then((res)=> res.json())
            .then((data)=>
            fetch('https://fullstackapi-2.herokuapp.com/users/'+data.token.user.id+'/cart')
            .then((res)=>res.json())
            .then((data)=> context.commit('setCart',data.results))
            )
        },
        clearSingleProduct(context){
            context.commit('clearSingleProduct')
        }
    },

    modules: {

    }
})
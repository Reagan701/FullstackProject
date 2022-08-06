import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        product: null,
        users: null,
        asc: true,
    },
    getters: {},
    mutations: {
        setUsers: (state, users) => {
            state.users = users;
        },
        setProducts: (state, products) => {
            state.products = products;
        },
        setProduct: (state, product) => {
            state.product = product;
        },
        sortProductsbyPrice: (state) => {
            state.products.sort((a, b) => {
                return a.price - b.price;
            });
            if (!state.asc) {
                state.products.reverse();
            }
            state.asc = !state.asc;
        }
    },
    actions: {
        getProducts: async(context) => {
            fetch(`http://localhost:3000/products`)
                .then((res) => res.json())
                .then((products) => context.commit("setProducts", products))
        },
        getProduct: async(context, id) => {
            fetch(`http://localhost:3000/products/${id}`)
                .then((res) => res.json())
                .then((product) => context.commit("setProduct", product))
        },
        getUser: async(context, id) => {
            fetch(`http://localhost:3000/users/${id}`)
                .then((res) => res.json())
                .then((users) => context.commit("setUsers", users))
        },

        login: async(context, payload) => {
            const { email, password } = payload;

            const response = await fetch(
                `http://localhost:3000/users?email=${email}&password=${password}`
            );
            const userData = await response.json();
            context.commit("setUsers", userData[0]);
        },
        register: async(context, payload) => {
            const { firstname, lastname, email, password } = payload;
            fetch("http://localhost:3000/users", {
                    method: "POST",
                    body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                .then((response) => response.json())
                .then((json) => context.commit("setUsers", json))
                .then(console.log("user created"))
        },
        createProduct: async(context, payload) => {
            console.log(payload);
            fetch(`http://localhost:3000/products/`, {
                    method: "POST",
                    body: JSON.stringify({
                        title: payload.title,
                        img: payload.img,
                        desc: payload.desc,
                        category: payload.category,
                        price: payload.price,
                        power: payload.power,
                        used_by: payload.used_by,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                .then((res) => res.json())
                .then((product) => {
                    console.log(product);
                    context.dispatch("getProducts", product);
                });
        },
        deleteProduct: async(context, id) => {
            fetch(`http://localhost:3000/products/${id}`, {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((json) => context.dispatch("getProducts", json));
        },
        editProduct: async(context, payload, id) => {
            console.log(payload);
            fetch(`http://localhost:3000/products/` + id, {
                    method: "PUT",
                    body: JSON.stringify({
                        title: payload.title,
                        img: payload.img,
                        desc: payload.desc,
                        category: payload.category,
                        price: payload.price,
                        power: payload.power,
                        used_by: payload.used_by,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                .then((res) => res.json())
                .then((product) => {
                    console.log(product);
                    context.dispatch("setProducts", product);
                });
        },
    },

    modules: {}
})
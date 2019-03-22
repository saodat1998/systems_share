<template>
    <div class="settings container">
        <b-row class="pt-3">
        <div>
         <b-col><b-button v-b-modal.modal-center>Create a role</b-button></b-col>
            <b-modal
                    id="modal-center"
                    centered title="Create a new Role"
                    @ok = "createNewRole"
            >
                <div>
                    <b-form-input v-model="roleName"  type="text" placeholder="Role name" />
                    <b-form-select v-model="selected" class="mt-3" :options="options" />
                </div>

                <div>
                    <div class="mt-3">Value: {{ roleName }}</div>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </div>
            </b-modal>
        </div>
        <form @submit.prevent="fetchData">
            <b-col><button type="submit" class="btn btn-primary">Show Roles</button></b-col>
        </form>
        </b-row>
        <b-row class="pt-3">
            <b-col>
        <b-table bordered
                 show-empty
                 stacked="md"
                 :items="roles"
                 :fields="fields"
                 selectable
                 :select-mode="selectMode"
                 selectedVariant="success"
                 @row-selected="rowSelected"
        >


        </b-table>

                {{ selected2 }}
                <div v-if="selected2[0].id_permissions === !null">
                        <span v-for="(id, key) in (selected2[0].id_permissions).value" :key="key">
                             {{ id }}
                        </span>
                </div>
            </b-col>
            <b-col>
            <b-table bordered
                     show-empty
                     stacked="md"
                     :items="permissions"
                     :fields="fields2"
            >

                <template slot="id" slot-scope="id">
                        <tr v-for="(s_id, key) in selected2" :key="key.value">
                            <span v-if="s_id === id.value">
                                <span this.checked = true></span>
                            </span>
                        </tr>
                    <b-form-checkbox v-model="checked" name="check-button">

                    </b-form-checkbox>

                    <!--<span v-else>-->
                                 <!--<b-form-checkbox switch v-model="changeNotChecked" name="check-button">-->
                                        <!--Switch Checkbox <b>(Checked: {{ changeNotChecked }})</b>-->
                                    <!--</b-form-checkbox>-->
                            <!--</span>-->

                </template>

            </b-table>
            </b-col>
        </b-row>

    </div>
</template>

<script>

    let config = {
        headers: {
            auth: localStorage.getItem('token'),
        }
    };
    const checked = false;

    export default {
        data() {
            return {
                i: 0,
                roles: [],
                checked: true,
                notChecked: false,
                permissions: [],
                initialState: false,
                fields: [
                    {key: 'name', label: "Name"},
                    {key: 'id_status', label: "Status"},

                ],
                fields2: [
                    {key: 'description', label: "Permissions"},
                    {key: 'id', label: "Id"},
                    {key: 'status', label: "status"},

                ],
                roleName: '',
                selected: null,
                options: [
                    {value: null, text: 'Please select role status'},
                    {value: '1', text: 'Active'},
                    {value: '0', text: 'Not active'},
                ],
                selectMode: 'single',
                selected2: [1],


            }
        },
        computed: {
            changeState: function () {
                return this.checked = !checked;
            },
            changeNotChecked: function () {
                return this.checked = false;
            }
        },
        methods: {
            fetchData() {
                this.$http.get('/roles/all/showing/permissions', config).then(response => {
                    this.roles = response.data;
                });
                this.$http.get('/permissions/all', config).then(response => {
                    this.permissions = response.data;
                });

            },
            createNewRole() {
                this.$http.post('/roles', {name: this.roleName, id_status: this.selected}, config)
                    .then(request => this.fetchData());

            },
            rowSelected(items) {
                if (items[0] !== null) {
                    this.selected2 = items[0].id_permissions;

                }
            }

        }
    }

</script>

<style scoped>

</style>
<template>
    <div class="settings container">
        <b-row>
        <div>
         <b-col><b-button v-b-modal.modal-center>Create a role</b-button></b-col>
            <b-modal id="modal-center" centered title="Create a new Role">
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

        <b-table bordered
                 show-empty
                 stacked="md"
                 :items="roles"
                 :fields="fields"
        >
            <template slot="id_permissions" slot-scope="id_permissions">
                <tr v-for="(id_permission, key) in id_permissions.value" :key="key.value">
                    <span v-for="(permission, key2) in permissions" :key="key2">
                       <span v-if="id_permission === permission.id">
                          {{permission.description}}
                       </span>
                    </span>
                </tr>
            </template>
        </b-table>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    const urlRoles = "http://www.mocky.io/v2/5c8c9503310000a6034c249d";
    const urlPermissions = "http://www.mocky.io/v2/5c8c903731000074004c2498";

    export default {
        data() {
            return {

                roles: [],
                permissions: [],
                fields: [
                    {key: 'name', label: "Name"},
                    {key: 'id_status', label: "Status"},
                    {key: 'id_permissions', label: "Permissions"},
                ],
                roleName: '',
                selected: null,
                options: [
                    { value: null, text: 'Please select role status' },
                    { value: '1', text: 'Active' },
                    { value: '0', text: 'Not active' },
                ],
            }
        },
        methods: {
            fetchData() {
                axios.get(urlRoles).then(response => {
                    this.roles = response.data
                });
                axios.get(urlPermissions).then(response => {
                    this.permissions = response.data
                });

            }
        }

    }

</script>

<style scoped>

</style>
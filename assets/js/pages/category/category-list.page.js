parasails.registerPage('category-list', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    //…
    itemView: '/category/category-list/',
    syncing: false,
    cloudError: '',
    formErrors: {},

    listView: '/category/category-list',
    itemView: '/category/categoryitem/',
    removeAction: 'removecategory',

    allSelected: false,
    selectedItems: [],

    deleteModelOpen: false,

    formData: {
      category_name: '',
      visibility: -1,
    },
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
    _.extend(this, SAILS_LOCALS);

    this.formData.category_name = this.filter.category_name ? this.filter.category_name : '';
    this.formData.visibility = this.filter.visibility >= 0 ? this.filter.visibility : -1;
  
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
     //Edit One Item Button
  showEditView: function(id) {

    window.location.href = this.itemView + id;
   },
   //Delete One Item Button
   deleteOneItem: function(id){
    this.selectedItems= [];
    this.selectedItems.push(id);
    this.deleteModelOpen = true;

   },
    // PEGINATION
    pagination: function(selectedPage, pageCount) {

      var array = [],
        j = 0;

      if (selectedPage + 10 < pageCount) {
        pageCount = selectedPage + 10;
      }

      if (selectedPage - 10 <= 0) {
        selectedPage = 0;
      } else {
        selectedPage = selectedPage - 10
      }

      for (var i = selectedPage; i <= pageCount; i++) {
        array[j] = i;
        j++;
      }

      return array;

    },
    selectAll: function() {
      
      this.selectedItems = [];

      if (!this.allSelected) {
        for (i in this.data) {
          this.selectedItems.push(this.data[i].id);
        }
      }

    },

    select: function() {
      this.allSelected = false;
    },

  

  deleteItems: async function() {

    if (this.selectedItems.length == 0) {

      alert("Please select an item!");

    } else {

      this.deleteModelOpen = true;

    }

  },

  closeDeleteModal: function() {

    this.deleteModelOpen = false;
    this.cloudError = '';

  },
  handleParsingDeleteForm: function() { 

    return {
      selectedItems: this.selectedItems,

    };

  },

  submittedDeleteForm: function(result) {

    if (result.result) {

      for (i = 0; i < result.result.length; i++) {

        _.remove(this.data, {
          id: result.result[i].id
        });
        
      }

      this.deleteModelOpen = false;
      this.cloudError = '';

      this.$forceUpdate();

    }
  
  },
  }
});



export default {
    type: 'object',
    name: 'KeynoteControl',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'reference',
         to: [{ type: "keynote" }],
      },
      {
        name: "hide_li_icon",
        title: "Hide LI Icon (OPTIONAL)",
        description: "you want to hide linkedin clickable icon for this keynote?",
        type: "boolean",
        initialValue: false,
      },
    ]
}
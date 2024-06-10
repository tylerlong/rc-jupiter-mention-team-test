# rc-jupiter-mention-team-test

This is a test repository to test the mention team feature in RingCentral app.


## notification
Manually post a `@Team`

```
"text": "<a class='at_mention_compose' rel='{\"id\":-1}'>@Team</a> ",
```

## Post a message with `@Team` in the text

Tried the following:

`![:Team](team-id)`: the team is not highlighted in yellow

`![:Team](-1)`: link to -1, not what we want

`"<a class='at_mention_compose' rel='{\"id\":-1}'>@Team</a>"`: shows a link to the team, but the link does redirect. 

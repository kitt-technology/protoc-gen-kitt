package generation

import (
    "bytes"
    "html/template"
)

const msgTpl = `
func (x *{{ .Type }}) XXX_AuthPermissions() []string {
	return []string{
    {{ range $perm := .Permissions }}"{{ $perm }}",
    {{ end }}
    }
}

func (x *{{ .Type }}) XXX_AuthResourceIds() []string {
    resourceIds := []string{}
    {{ if .ResourceId }} resourceIds = append(resourceIds,  x.{{ .ResourceId }}){{ end }}
    {{ if .ResourceIds }} resourceIds = append(resourceIds,  x.{{ .ResourceIds }}...){{ end }}
    return resourceIds
    {{ if .ResourceIds }} return x.{{ .ResourceIds }}{{ else }}return nil {{ end }}
}

func (x *{{ .Type }}) XXX_SetAuthResourceIds(resourceIds []string) auth.AuthMessage {
    {{ if .ResourceIds }}x.{{ .ResourceIds }} = resourceIds{{ end }}
	return x
}

func (x *{{ .Type }}) XXX_PullResourceIds() bool {
    return {{ if .PullResourceIds }}true{{ else }}false{{ end }}
}
`

type AuthMessage struct {
    Type string
    Permissions []string
    ResourceId string
    ResourceIds string
    PullResourceIds bool
}

func (a AuthMessage) Generate() string {
    var buf bytes.Buffer
    mTpl, err := template.New("msg").Parse(msgTpl)
    if err != nil {
        panic(err)
    }
    mTpl.Execute(&buf, a)

    return buf.String()
}

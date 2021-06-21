(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(n,i,t){"use strict";t.r(i);var e=t(44),r=Object(e.a)({},(function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"basic-algorithm-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-algorithm-template"}},[n._v("#")]),n._v(" Basic algorithm template")]),n._v(" "),t("h2",{attrs:{id:"dijk-dfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dijk-dfs"}},[n._v("#")]),n._v(" Dijk + DFS")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <iostream>\n#include <map>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint n, k;\nconst int inf = 999999999;\nint e[205][205], weight[205], dis[205];\nbool visit[205];\nvector<int> pre[205], temppath, path;\nmap<string, int> m;\nmap<int, string> m2;\nint maxvalue = 0, mindepth, cntpath = 0;\ndouble maxavg;\nvoid dfs(int v) {\n    temppath.push_back(v);\n    if(v == 1) {\n        int value = 0;\n        for(int i = 0; i < temppath.size(); i++) {\n            value += weight[temppath[i]];\n        }\n        double tempavg = 1.0 * value / (temppath.size() - 1);\n        if(value > maxvalue) {\n            maxvalue = value;\n            maxavg = tempavg;\n            path = temppath;\n        } else if(value == maxvalue && tempavg > maxavg) {\n            maxavg = tempavg;\n            path = temppath;\n        }\n        temppath.pop_back();\n        cntpath++;\n        return ;\n    }\n    for(int i = 0; i < pre[v].size(); i++) {\n        dfs(pre[v][i]);\n    }\n    temppath.pop_back();\n}\nint main() {\n    fill(e[0], e[0] + 205 * 205, inf);\n    fill(dis, dis + 205, inf);\n    scanf("%d %d", &n, &k);\n    string s;\n    cin >> s;\n    m[s] = 1;\n    m2[1] = s;\n    for(int i = 1; i < n; i++) {\n        cin >> s >> weight[i+1];\n        m[s] = i+1;\n        m2[i+1] = s;\n    }\n    string sa, sb;\n    int temp;\n    for(int i = 0; i < k; i++) {\n        cin >> sa >> sb >> temp;\n        e[m[sa]][m[sb]] = temp;\n        e[m[sb]][m[sa]] = temp;\n    }\n    dis[1] = 0;\n    for(int i = 0; i < n; i++) {\n        int u = -1, minn = inf;\n        for(int j = 1; j <= n; j++) {\n            if(visit[j] == false && dis[j] < minn) {\n                u = j;\n                min = dis[j];\n            }\n        }\n        if(u == -1) break;\n        visit[u] = true;\n        for(int v = 1; v <= n; v++) {\n            if(visit[v] == false && e[u][v] != inf) {\n                if(dis[u] + e[u][v] < dis[v]) {\n                    dis[v] = dis[u] + e[u][v];\n                    pre[v].clear();\n                    pre[v].push_back(u);\n                } else if(dis[v] == dis[u] + e[u][v]) {\n                    pre[v].push_back(u);\n                }\n            }\n        }\n    }\n    int rom = m["ROM"];\n    dfs(rom);\n    printf("%d %d %d %d\\n", cntpath, dis[rom], maxvalue, (int)maxavg);\n    for(int i = path.size() - 1; i >= 1; i--) {\n        cout << m2[path[i]] << "->";\n    }\n    cout << "ROM";\n    return 0;\n}\n')])])]),t("h2",{attrs:{id:"quick-sort-and-merge-sort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-sort-and-merge-sort"}},[n._v("#")]),n._v(" Quick Sort and Merge Sort")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("#include <iostream>\n\nusing namespace std;\n\nconst int N = 1e6 + 10;\nint q[N];\n\nvoid quick_sort(int q[], int left, int right) {\n    if(left>=right) return;\n    int x= q[left],i=left-1,j=right+1;\n    while(i<j){\n        do i++;while (q[i]<x);\n        do j--;while(q[j]>x);\n        if(i<j) swap(q[i],q[j]);\n\n    }\n\n    quick_sort(q,left,j);\n    quick_sort(q,j+1,right);\n}\n\nvoid merge(int q[],int l,int r){\n    if(l>=r) return;\n    int mid = l+r >>1;\n    merge(q,l,mid);\n    merge(q,mid+1,r);\n    int i=l,j=mid+1,idx=0;   \n    while(i<=mid && j <=r){\n        if(q[i]<=q[j]) {\n            temp[idx++] =q[i++];\n        }\n        else {\n            temp[idx++] = q[j++];\n        }\n    }\n    while(i<=mid) temp[idx++] = q[i++];\n    while(j<=r) temp[idx++] =q[j++];\n\n    for(int i=l,k=0;i<=r;i++,k++){\n        q[i]=temp[k];\n    }\n\n}\n")])])]),t("h2",{attrs:{id:"binary-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-search"}},[n._v("#")]),n._v(" Binary Search")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <iostream>\n\nusing namespace std;\n\nconst int N = 1e6 + 10;\nint arr[N];\n\nint b_search1(int arr[], int l, int r, int num) {\n\n    int mid;\n    while (l < r) {\n         mid = l + r >> 1;\n        if (arr[mid] >= num) r = mid;\n        else l =mid+1;\n    }\n     return  arr[l]==num ? l : -1;\n\n\n}\n\nint b_search2(int arr[], int l, int r, int num) {\n    int mid ;\n    while (l<r){\n        mid = l +r +1 >> 1;\n        if(arr[mid]<=num) l = mid;\n        else  r = mid -1;\n    }\n    return arr[l] == num ? l : -1;\n}\n\nint main() {\n    int n, q;\n    scanf("%d %d", &n, &q);\n    for (int i = 0; i < n; ++i) {\n        scanf("%d", &arr[i]);\n    }\n\n    for (int i = 0; i < q; ++i) {\n        int num;\n        scanf("%d", &num);\n        int l = b_search1(arr, 0, n - 1, num);\n        int r = b_search2(arr, 0, n - 1, num);\n        cout << l << " " << r << endl;\n    }\n\n\n}\n\n')])])]),t("h2",{attrs:{id:"tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree"}},[n._v("#")]),n._v(" Tree")]),n._v(" "),t("blockquote",[t("p",[n._v("Create a tree via the  pre-order traversal and medium-order traversal")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Node * creatTree(int inL,int inR,int preL, int preR){\n  if(inL>inR) return ;\n  Node * root = new Node();\n  root->val = pre[preL];\n  \n  int k;\n  for(int i=inL;i<=inR;i++){\n    if(in[i] == root->val) {\n      k=i;\n      break;\n    }\n  }\n    \n  int LeftCount = k - inL;\n  root->left = createTree(inL,k-1,preL+1,preL+LeftCount);\n  root->right = createTree(k+1,inR,preL+LeftCount+1,preR);\t\n \treturn root;\n}\n\nint main(){\n  \tfor(int i=0;i<n;i++) scanf("%d",&in[i]);\n  \tfor(int i=0;i<n;i++) scanf("%d",&pre[i]);\n    Node *root= creatTree(0,n-1,0,n-1); \n}\n')])])]),t("blockquote",[t("p",[n._v("数的遍历 前序中序转后续")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("void to_post(int root,int start,int end){\n  if(start > end ) return;\n  int i =start ;\n  //这里是小于号因为如果是前面n-1个都不是 一定是最后一个\n  while(i<end && pre[root]!=in[i]) i++;\n  to_post(root+1,start,i-1);  \n  to_post(root+i-start+1,i+1,end);\n  cout<<pre[root];  \n}\n")])])]),t("blockquote",[t("p",[n._v("树的遍历 后续中序转前序+层序")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("void pre(int root,int idx,int start,int end){\n  if(start>end) return;\n  int i=start;\n  while(i<end && post[root]!=in[i]) i++;\n  cout<<post[root]<<endl;\n  level[idx] = post[root];\n  \n \tpre(root-end+i-1 ,idx*2,start,i-1);\n \tpre(root-1,idx*2+1,i+1,end);\n}\n")])])]),t("h2",{attrs:{id:"数学问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数学问题"}},[n._v("#")]),n._v(" 数学问题")]),n._v(" "),t("blockquote",[t("p",[n._v("试除法求所有约数")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <iostream>\n#include <algorithm>\n#include <vector>\n\nusing namespace std;\n\nvoid get_divisors(int x){\n    vector<int> list;\n\n    \n    for(int i=1;i<=x/i;i++){\n        if(x % i ==0){\n            list.push_back(i);\n           if(i!=x/i) list.push_back(x/i);\n        }\n    }\n    sort(list.begin(),list.end());\n    for(int i=0;i<list.size();i++){\n        cout<<list[i]<<" ";\n    }\n    cout<<endl;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    for(int i=0;i<n;i++){\n        int x;\n        cin>>x;\n        get_divisors(x);\n        \n    }\n}\n')])])])])}),[],!1,null,null,null);i.default=r.exports}}]);
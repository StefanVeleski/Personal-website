# Install and call in the packages
install.packages("blogdown")
library(blogdown)

# Use the new_site() function to start a new site with theme = to the theme repository 

blogdown::new_site(theme = "gcushen/hugo-academic")

#These need to be added to the name servers?
#dns1.p03.nsone.net
#dns2.p03.nsone.net
#dns3.p03.nsone.net
#dns4.p03.nsone.net
blogdown::serve_site()

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="books">


<xsl:variable name="rating35Count" select="count(//book[review=3.5])" />

<xsl:variable name="rating4Count" select="count(//book[review=4])" />


<p>There are <xsl:value-of select="$rating35Count" /> books with a review of 3.5.</p>


<p>There are <xsl:value-of select="$rating4Count" /> books with a review of 4.</p>


</xsl:template>


</xsl:stylesheet>